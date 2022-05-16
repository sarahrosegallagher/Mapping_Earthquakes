
//  mapbox ids:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11

// console log test
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      37.6213, -95
        ],
    zoom: 5
  });

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [30.283910,-97.704840],
  [43.680706,-79.6115899],
  [40.64357,-73.78203]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: "10, 10",
  opacity: "0.5",
  weight: "4"
}).addTo(map);

// tile layer  https://leafletjs.com/examples/quick-start/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add tile layer  
streets.addTo(map);