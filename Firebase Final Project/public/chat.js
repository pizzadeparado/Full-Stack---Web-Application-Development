"use strict";

// Shortcuts to DOM Elements.
var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("new-post-message");
var titleInput = document.getElementById("new-post-title");
var signInButton = document.getElementById("sign-in-button");
var signOutButton = document.getElementById("sign-out-button");
var addPost = document.getElementById("add-post");
var addPostButton = document.getElementById("add-post-button");
var recentPostsSection = document.getElementById("recent-posts-list");
var newPostCollapse = document.getElementById("new-post-collapse");
var listeningFirebaseRefs = [];

// [START write_fan_out]
function writeNewPost(uid, username, picture, title, body) {
	// A post entry.
	var postData = {
		author: username,
		uid: uid,
		body: body,
		title: title,
		authorPic: picture,
		comments: []
	};

	// Get a key for a new Post.
	var newPostKey = firebase
		.database()
		.ref()
		.child("posts")
		.push().key;

	// Write the new post's data simultaneously in the posts list and the user's post list.
	var updates = {};
	updates["/posts/" + app.match_id + "/" + newPostKey] = postData;
	updates["/user-posts/" + uid + "/" + app.match_id + "/" + newPostKey] = postData;

	return firebase
		.database()
		.ref()
		.update(updates);
}

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postKey, username, uid, text) {
	firebase
		.database()
		.ref("posts/" + app.match_id + "/" + postKey + "/comments")
		.push({
			text: text,
			author: username,
			uid: uid,
			postKey: postKey
		});
}

/**
 * Starts listening for new posts and populates posts lists.
 */
function startDatabaseQueries() {
	// [START recent_posts_query]
	app.forumPosts = [];
	var recentPostsRef = firebase
		.database()
		.ref("posts/" + app.match_id)
		.limitToLast(100);
	var commentsRef = firebase
		.database()
		.ref("post-comments/" + app.match_id)
		.limitToLast(100);

	//Modifies VUE forumPosts when theres a change on the database
	var fetchPosts = function (postsRef, commRef) {
		postsRef.on("child_added", function (data) {
			var aux = [];
			var comments = data.val().comments;

			for (var prop in comments) {
				aux.push(comments[prop]);
			}

			var dataObj = {
				key: data.key,
				title: data.val().title,
				author: data.val().author,
				body: data.val().body,
				uid: data.val().uid,
				authorPic: data.val().authorPic,
				comments: aux
			};

			app.forumPosts.push(dataObj);
		});
		postsRef.on("child_changed", function (data) {
			var aux = [];
			var comments = data.val().comments;

			for (var prop in comments) {
				aux.push(comments[prop]);
			}

			app.forumPosts.map(function (x) {
				if (x.key == data.key) {
					x.title = data.val().title;
					x.author = data.val().author;
					x.body = data.val().body;
					x.comments = aux;

					return;
				}
			});
		});
		postsRef.on("child_removed", function (data) {
			var aux = [];

			app.forumPosts.map(function (x) {
				if (x.key != data.key) {
					aux.push(x);
				}
			});

			app.forumPosts = aux;
		});

		commRef.on("child_added", function (data) {
			console.log(data);
			app.forumPosts.map(function (x) {
				if (x.key == data.postKey) {
					x.comments.push(data);
				}
			});
		});
	};

	// Fetching and displaying all posts and comments
	fetchPosts(recentPostsRef, commentsRef);
	//fetchComments(commentsRef);

	// Keep track of all Firebase refs we are listening to.
	listeningFirebaseRefs.push(recentPostsRef);
	listeningFirebaseRefs.push(commentsRef);
}

/**
 * Writes the user's data to the database.
 */
// [START basic_write]
function writeUserData(userId, name, email, imageUrl) {
	firebase
		.database()
		.ref("users/" + userId)
		.set({
			username: name,
			email: email,
			profile_picture: imageUrl
		});
}
// [END basic_write]

/**
 * Cleanups the UI and removes all Firebase listeners.
 */
function cleanupUi() {
	app.forumPosts = [];

	// Stop all currently listening Firebase listeners.
	listeningFirebaseRefs.forEach(function (ref) {
		ref.off();
	});
	listeningFirebaseRefs = [];
}

/**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic token refresh but not a User status change.
 */
var currentUID;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {
	// We ignore token refresh events.
	if (user && currentUID === user.uid) {
		return;
	}

	cleanupUi();
	if (user) {
		currentUID = user.uid;
		app.logged = true;
		writeUserData(user.uid, user.displayName, user.email, user.photoURL);
		startDatabaseQueries();
	} else {
		// Set currentUID to null.
		currentUID = null;
		app.logged = false;
	}
}

/**
 * Creates a new post for the current user.
 */
function newPostForCurrentUser(title, text) {
	// [START single_value_read]
	var userId = firebase.auth().currentUser.uid;
	return firebase
		.database()
		.ref("/users/" + userId)
		.once("value")
		.then(function (snapshot) {
			var username = (snapshot.val() && snapshot.val().username) || "Anonymous";
			// [START_EXCLUDE]
			return writeNewPost(
				firebase.auth().currentUser.uid,
				username,
				firebase.auth().currentUser.photoURL,
				title,
				text
			);
			// [END_EXCLUDE]
		});
	// [END single_value_read]
}

// Bindings on load.
window.addEventListener("load", function () {
	// Bind Sign in button.
	signInButton.addEventListener("click", function () {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	});

	// Bind Sign out button.
	signOutButton.addEventListener("click", function () {
		firebase.auth().signOut();
	});

	// Listen for auth state changes
	firebase.auth().onAuthStateChanged(onAuthStateChanged);

});

function postComment() {
	var text = $("#new-post-message").val();
	var title = $("#new-post-title").val();	
	if (text && title) {
			newPostForCurrentUser(title, text);
			$("#new-post-message").val("");
			$("#new-post-title").val("");
			$("#new-post-collapse").removeClass("show");
	}
}