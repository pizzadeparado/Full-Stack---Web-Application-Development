Vue.component("partido", {
	props: ["nombre1", "nombre2", "mes", "dia", "horario", "lugar", "url"],
	template: `
    <table>
    <tbody>
    <tr>
    <td><span>{{dia + '/' + mes}}</span></td>
    <td><span>{{horario}}</span></td>
    <td><span>{{nombre1 + 'v' + nombre2}}</span></td>
		<td><span>
		<a id="llevarme a maps" v-bind:href="url">{{lugar}}</a>
		<a id="mostrar mapa" v-on:click="seleccionarEstadio(url)"></a>
		</span>
    </td>
		<td>
		<button v-on:click="mostrarChat(partido.match_id)">Posts</button>
		</td>
    </tr>
    </tbody>
    </table>
    `
});

var app = new Vue({
	el: "#app",
	data: {
		page: "Index",
		partidos: [],
		match_id: null,
		meses: [
			{
				nombre: "June",
				numero: 6
			},
			{
				nombre: "July",
				numero: 7
			},
			{
				nombre: "August",
				numero: 8
			},
			{
				nombre: "September",
				numero: 9
			}
		],
		teams: [
			{
				name: "U1"
			},
			{
				name: "U2"
			},
			{
				name: "U3"
			},
			{
				name: "U4"
			},
			{
				name: "U5"
			},
			{
				name: "U6"
			},
		],
		forumPosts: [],
		logged: false,
		mesSeleccionado: null,
		teamSeleccionado: "All",
		formEnviado: false,
	},
	methods: {
		filtrarPartidos(numeroDeMes, teamName){
			if(teamName !== 'All'){
				this.partidos = partidos.filter(x => x.nombre1 == teamName && x.mes == numeroDeMes || x.nombre2 == teamName && x.mes == numeroDeMes);
			}else{
				this.partidos = partidos.filter(x => x.mes == numeroDeMes);
				}
			this.teamSeleccionado = teamName;
			this.mesSeleccionado = numeroDeMes;
			var url = this.partidos[0].url;
			this.seleccionarEstadio(url, 0);
		},
		seleccionarEstadio(url, index) {
			$("#map-seleccionado").attr("src", url);
			$(".btn-estadio-class").removeClass("unaClase");
			$("#btn-estadio" + index).addClass("unaClase");
		},
		funcCom(postKey) {
			var commInput = document.getElementById("comm-input-" + postKey).value;
			var aux = commInput.replace(/ /g, "");

			if (aux == "") {
				return alert("The comment must have some text on it!");
			} else {
				var username = firebase.auth().currentUser.displayName;
				var uid = firebase.auth().currentUser.uid;

				createNewComment(postKey, username, uid, commInput);
				document.getElementById("comm-input-" + postKey).value = "";
			}
		},
		desplegar(id){
			this.match_id = id
		},
		mostrarChat: function(id) {
			this.match_id = id;
			this.page = "matchFocus";
			startDatabaseQueries();
		},
		volverAtras: function (){
			this.page = "Schedule";
			cleanupUi();
		},
		switchPage: function(newPage){
			this.page = newPage;
			$("#navbarNavDropdown").removeClass("show");
			this.formEnviado = false;
		}
	}
});

var today = new Date();
app.mesSeleccionado = today.getMonth() + 1;
app.filtrarPartidos(app.mesSeleccionado, app.teamSeleccionado);


//********** contact button **********//
$(".fixed-action-btn").click(function() {
	var data =
		"<p>Please email us at: <a href='mailto:nysl@chisoccer.org'>nysl@chisoccer.org</a></p>We will reply to your email as soon as we can.";
	Swal.fire({
		title: " <i class='small material-icons'>drafts</i> Contact ",
		html: data
	});
});


//********** sign in button **********//
var signInButton = document.getElementById("sign-in-button");
var signOutButton = document.getElementById("sign-out-button");

// function onAuthStateChanged(user) {
//     // We ignore token refresh events.
//     if (user && currentUID === user.uid) {
//       return;
//     }

window.addEventListener(
	"load",
	function() {
		// Bind Sign in button.
		signInButton.addEventListener("click", function() {
			var provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithPopup(provider);
		});
		// Bind Sign out button.
		signOutButton.addEventListener("click", function() {
			firebase.auth().signOut();
		});
		// Listen for auth state changes
		// firebase.auth().onAuthStateChanged(onAuthStateChanged);
	},
	false
);