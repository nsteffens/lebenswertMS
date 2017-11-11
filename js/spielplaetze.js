const spielplaetze_map = new L.map('spielplaetze_map', {
    scrollWheelZoom: false
}).setView([51.964711, 7.628496], 12);    

const basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(spielplaetze_map);

plotty.addColorScale("redtogreen", ["#FF0000", "#FFFF00", "#00FF00"], [0, 0.5, 1]);


var geotiff_layer = L.leafletGeotiff('./../data/spielplaetze/spielplaetze_neu.tif', {
    displayMin: 0,
    displayMax: 0.025,
    colorScale: 'redtogreen'
}).addTo(spielplaetze_map);

geotiff_layer.setOpacity(0.5)

function onMapClick(e) {
    var geotiff_val = geotiff_layer.getValueAtLatLng(e.latlng.lat,e.latlng.lng);
    console.log(geotiff_val)
}

spielplaetze_map.on('click', onMapClick);


    
