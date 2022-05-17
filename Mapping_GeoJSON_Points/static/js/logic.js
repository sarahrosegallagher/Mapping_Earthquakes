// NTS: RESUME AT SKILL DRILL 13.4.3

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
      37.6, -122.4
        ],
    zoom: 12
  });

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",

    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},

        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// call back fxn: on each feature
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup();
  }
}).addTo(map);

// call back fxn: point to layer
// L.geoJSON(sanFranAirport,{
//   // pointToLayer method to add each feature into marker
//   // chain bindPopup()
//   pointToLayer: function(feature, latlng){
//     // log for testing 
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>"+feature.properties.city +"</h2>");
//   }
// }).addTo(map);

// tile layer  https://leafletjs.com/examples/quick-start/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/navigation-preview-night-v2',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add tile layer  
streets.addTo(map);