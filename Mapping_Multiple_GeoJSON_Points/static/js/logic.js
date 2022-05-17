// intellisense path
/// <reference path = "../../typings/index.d.ts" />

//  mapbox ids:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11
    //  mapbox/navigation-preview-night-v2

// console log test
console.log("working");


// map method 2
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      30,30
        ],
    zoom: 2
  });


// tile layer variable https://leafletjs.com/examples/quick-start/

let tile = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-preview-night-v2',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add tile layer  
tile.addTo(map);

// Add GeoJSON data url access
  // after tileLayer() bcs map load before large data added 
let airportData = "https://raw.githubusercontent.com/sarahrosegallagher/Mapping_Eartquakes/main/majorAirports.json";

// d3.json method w .then() promise and anon function()
d3.json(airportData).then(function(data){
  console.log(data);
  // geoJSON layer w data
  L.geoJSON(data,{
    // nested on each feature for bindPopup
    onEachFeature: function(feature, layer){
      layer.bindPopup("<h2>Airport Code: "+feature.properties.faa +"</h2> <hr> <h3>Airport Name: " 
      + feature.properties.name + "</h3>");
    }
  }).addTo(map);
});