// intellisense path
/// <reference path = "../../typings/index.d.ts" />

//  mapbox ids:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11
    // mapbox/navigation-preview-night-v2
    // mapbox/navigation-preview-day-v2


// streets tile
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//dark tile
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//base layer w both tiles
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

//map 
let map = L.map("mapid", {
  center: [
    43.7, -79.3
      ],
  zoom: 11,
  layers: [streets]
});

// layers into layers control, add control to map
L.control.layers(baseMaps).addTo(map);

// Add GeoJSON data url access
  // after tileLayer() bcs map load before large data added 
let torontoHoods = "https://raw.githubusercontent.com/sarahrosegallagher/Mapping_Eartquakes/main/torontoNeighborhoods.json";

// style for lines
let myStyle = {
  color: "#3F5EDE",
  fillColor: "#EAE223",
  weight: 1
};

// d3.json method w .then() promise and anon function()
d3.json(torontoHoods).then(function(data){
  console.log(data);
  // geoJSON layer w data
  L.geoJSON(data,{
    // style
    style: myStyle,
    // nested on each feature for bindPopup
    onEachFeature: function(feature, layer){
      layer.bindPopup("<h2>Neighborhood: " +feature.properties.AREA_NAME + "</h3>");
}})
.addTo(map);
});