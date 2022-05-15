// boilerplate code

// console log test
console.log("working");


// map method 2
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      51.5, -0.09
    ],
    zoom: 12
  });


//single marker
// var marker = L.marker([51.5, -0.09]).addTo(map);

// circle
 var circle = L.circle([51.5073, -0.1657], {
    color: 'green',
    fillColor: '#29D837',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// circle marker radius in pixels
// var circleMarker = L.circleMarker([51.5073, -0.1657], {
//     radius: 30,
//     color: "green",
//     fillColor : "#29D837"
// }).addTo(map);

// tile layer method 1 https://leafletjs.com/examples/quick-start/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add 
streets.addTo(map);