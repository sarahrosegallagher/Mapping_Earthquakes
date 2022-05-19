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

//satellite tile
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//base layer w both tiles
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// earthquake layergroup overlay
let earthquakes = new L.layerGroup();

// object contains the overlays (to be visible all times)
let overlays = {
  Earthquakes: earthquakes
};


//map 
let map = L.map("mapid", {
  center: [
    39.5, -98.5
      ],
  zoom: 3,
  layers: [streets]
});

// layers into layers control, add control to map
L.control.layers(baseMaps, overlays).addTo(map);

// Add GeoJSON data url access
  // after tileLayer() bcs map load before large data added 
let earthquakes7Days = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// style for lines
function styleInfo(feature){
  return {
    opacity: 1,
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

function getRadius(magnitude){
  if (magnitude === 0){
    return 1;
  }
  return magnitude * 4;
}

function getColor(magnitude){
  if (magnitude > 5){
    return "#ea2c2c";
  }
  if (magnitude > 4){
    return "#ea822c";
  }
  if (magnitude > 3){
    return "#ee9c00";
  }  
  if (magnitude > 2){
    return "#eecc00";
  }
  if (magnitude > 1){
    return "#d4ee00";
  }
  return "#98ee00"
}

// d3.json method w .then() promise and anon function()
d3.json(earthquakes7Days).then(function(data){
  // geojson leaf
  L.geoJSON(data, {
    // ptl for circle marker on each 
    pointToLayer: function(feature, latlng){
      console.log(data);
      return L.circleMarker(latlng);
    },
    // style
    style: styleInfo,
    // bindPopup on each
    onEachFeature: function(feature, layer){
    layer.bindPopup("Magnitude: "+ feature.properties.mag + "<br>Location: " 
    + feature.properties.place);
    }
  }).addTo(earthquakes);
  earthquakes.addTo(map);
});

// legend from https://leafletjs.com/examples/choropleth/

let legend = L.control({
  position: 'bottomright'
});

legend.onAdd = function () {

    let div = L.DomUtil.create('div', 'info legend');
        const magnitudes = [0,1,2,3,4,5];
        const colors = [  "#98ee00",
        "#d4ee00",
        "#eecc00",
        "#ee9c00",
        "#ea822c",
        "#ea2c2c"];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < magnitudes.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);