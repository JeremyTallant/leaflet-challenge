// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(queryUrl).then(function (data) {
  // Console log the data 
  console.log(data);
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

// Determine the marker size by magnitude
function markerSize(magnitude) {
  return magnitude * 4;
};
// Determine the marker color by depth
function chooseColor(depth) {
  switch(true) {
    case depth > 90:
      return "red";
    case depth > 70:
      return "orangered";
    case depth > 50:
      return "orange";
    case depth > 30:
      return "gold";
    case depth > 10:
      return "yellow";
    default:
      return "lightgreen";
  }
}

function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p><p>Magnitude:${feature.properties.mag}</p>`);
    // Console log the feature properties
      console.log(feature);
  
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, 
        // Set the style of the markers based on properties.mag
        {
          radius: markerSize(feature.properties.mag),
          fillColor: chooseColor(feature.geometry.coordinates[2]),
          fillOpacity: 0.7,
          color: "black",
          stroke: true,
          weight: 0.5
        }
      );
    },
  });
  // Send our earthquakes layer to the createMap function/
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Create the base layer
  var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/streets-v11',
    accessToken: "pk.eyJ1IjoidGFsbGFudGo5NSIsImEiOiJjbGQwYmY4bzQwb3ZoM3Btb2kwc3Y4d3YyIn0.f1PLE4RCVxOkoOO0GMZppQ"
  });
   
  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Earthquakes: earthquakes
  };
  
  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    layers: [grayscale, earthquakes]
  });
  
  // Create a layer control.
  // Pass it our grayscale and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // Fit the map to the extent of the earthquakes layer
  myMap.fitBounds(earthquakes.getBounds());

  // Add legend
  var legend = L.control({position: "bottomright"});
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend"),
    depth = [-10, 10, 30, 50, 70, 90];
        
    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
  for (var i =0; i < depth.length; i++) {
    div.innerHTML += 
    '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' +
        depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
      }
    return div;
  };
  legend.addTo(myMap);

}
  