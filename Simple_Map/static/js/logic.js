// NTS: LEFT OFF 13.2.4 HALFWAY (MAP STYLE TILE LAYER)


// boilerplate code

// console log test
console.log("working");

// map method 1 
var map = L.map("mapid").setView([51.505, -0.09], 13);

// map method 2
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// tile layer method 1 https://leafletjs.com/examples/quick-start/

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//then add 
streets.addTo(map);
