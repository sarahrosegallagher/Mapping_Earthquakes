
// boilerplate code

// console log test
console.log("working");


// map method 2
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      39.0, -98.0
    ],
    zoom: 5
  });

//13.4.2
  // add multiple markers 
  // loop thru array 

//get data for array
  //need script src in index.html 
let cityData = cities;

//loop, use L.marker(), .bindPopup() method [toLocaleString() method for population format], .addTo(map)

// cityData.forEach(function(city){
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// same as above w circle based on pop
cityData.forEach(function(city){
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: "orange",
    fillColor: "#EE8E1B",
    lineWeight: 4
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// tile layer  https://leafletjs.com/examples/quick-start/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add tile layer  
streets.addTo(map);