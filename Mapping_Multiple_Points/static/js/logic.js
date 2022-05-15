// NTS: LEFT OFF 13.4.2 BIND A POPUP TO THE MARKER 
  //COMMIT CONTENT BEFORE THIS POINT 



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

//loop

cityData.forEach(function(city){
  console.log(city)
  L.marker(city.location).addTo(map);
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