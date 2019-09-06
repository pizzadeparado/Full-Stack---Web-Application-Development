// var tableHead = document.createElement("thead");

// var tableBody = document.createElement("tbody");

// var gamonth = gameInfo;


// function createTable(gamonth) {
  
//   var filteredGamonth = filterGame(gamonth);

//   filteredGamonth.forEach(function(u) {
    
//     var tableRow = tableBody.insertRow();
    
//     tableRow.className = "rowBody";
    
//     var cell = tableRow.insertCell(0);
    
//     cell.innerHTML = fullName;
//     tableRow.insertCell(1).appendChild(document.createTextNode(u.date));
//     tableRow.insertCell(2).appendChild(document.createTextNode(u.match));
//     tableRow.insertCell(3).appendChild(document.createTextNode(u.location));
//   });
  
//   document.getElementById("schedule-table").appendChild(tableBody);
// }


// // function filterGame(gamonth) {
// //   var checkBoxes = document.querySelectorAll("input[name=party-filter]:checked")
// //   checkedBoxes = Array.from(checkBoxes)
// //   checkedBoxes = checkedBoxes.map(function(element) {
// //     return element.value;
// //   })
  
// //   var filtered = [];
// //   filtered = gamonth.filter(function(member) {
// //     return checkedBoxes.includes(member.party)
// //   });
  
// //   if (filterState() !== "") {
// // 		filtered = filtered.filter(gamonth => filterState() == gamonth.state)
// //   }
// //   return filtered
// // }

// // function filterState() {
// //   var state = document.querySelector("#state-filter").value;
// //   return state;
// // }

// function clearTable() {
//   $(".rowBody").remove();
//   createTable(filterGame(gamonth));
// }
// createTable(gamonth);



Vue.component ("match", {
  props: ["name", "month", "day", "time", "location", "url"],
  template: `
  <li class = "list-group-item border-dark d-flex text-center align-items-center">
  <span class = "flex-shrink text-center"> {{day + "/" + month + "" + time}} </span>
  <span class = "w-50"> {{ name }} </span>
  <span>
    <a id = "Take me to Maps" v-bind: href = "url"> {{ location }} </a>
    <a id = "Show Map" v-on: click = "selectLocation(url)"> </a>
  </span>
  </li>
  `,
})


var app = new Vue({
  el: '#app',
  data: {
      matches :[],
      months: [
          {
              name: "June",
              number: 6
          },
          {
              name: "July",
              number: 7
          },
          {
              name: "August",
              number: 8
          }
      ]
      },
  methods: {œ
      changeMonth(monthNumber) {
          this.matches = matches.filter(x => x.month == monthNumber)
      },
      selectLocation(url, index) {
          $("#map-seleccionado").attr("src", url);
          $(".btn-estadio-class").removeClass("unaClase");
          $("#btn-estadio" + index).addClass("unaClase");
      }
  }
})

var today = new Date();
var currentMonth = today.getMonth()+1;

app.changeMonth(currentMonth)