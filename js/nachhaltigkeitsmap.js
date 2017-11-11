'use strict';

//let accessToken = 'pk.eyJ1IjoiZmVsaXhhZXRlbSIsImEiOiI2MmE4YmQ4YjIzOTI2YjY3ZWFmNzUwOTU5NzliOTAxOCJ9.nshlehFGmK_6YmZarM2SHA';

let sust_ms;

var monumentIcon = L.icon({
    iconUrl: './../img/monument_icon3.png',

    iconSize: [38, 38], // size of the icon
    iconAnchor: [19, 19], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -19] // point from which the popup should open relative to the iconAnchor
});

$.getJSON('/data/nachhaltigkeit.json', (data) => {
    sust_ms = data;
    console.log(sust_ms)

    const map = new L.map('nachhaltigkeits_map').setView([51.964711, 7.628496], 12);

    const basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: accessToken
    }).addTo(map);


    let sust_ms_collection = {
        "type": "FeatureCollection",
        "features" : []
    };

    sust_ms.forEach(element => {
        // Always do the first one.. Hackathon style..
        sust_ms_collection.features.push(element.features[0]);
    });



    let sustainabilityLayer = L.geoJSON(sust_ms_collection, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: monumentIcon
            })
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.title);
        }
    }).addTo(map);
});