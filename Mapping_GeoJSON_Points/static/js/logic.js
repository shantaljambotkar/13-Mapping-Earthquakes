// Add console.log to check to see if our code is working.
// console.log("working");


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.19, -97.67],
    [43.67, -79.62],
    [40.64, -73.77]
  ];


  var lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 4
  };

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
    strokeOpacity: 0,
    color: "blue",
    icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px'
      }]
 }).addTo(map);


// We create the dark tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);