let accessToken = 'pk.eyJ1IjoiZmVsaXhhZXRlbSIsImEiOiI2MmE4YmQ4YjIzOTI2YjY3ZWFmNzUwOTU5NzliOTAxOCJ9.nshlehFGmK_6YmZarM2SHA';

let heritage_ms;

var monumentIcon = L.icon({
    iconUrl: './../img/monument_icon3.png',

    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 19], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -19] // point from which the popup should open relative to the iconAnchor
});

$.getJSON('/data/heritage_ms.json', (data) => {
    heritage_ms = data;
    
    const map = new L.map('map').setView([51.964711, 7.628496], 12);

    const basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: accessToken
    }).addTo(map);

    let heritageLayer = L.geoJSON(heritage_ms, {
        pointToLayer: function(feature, latlng) {
          return L.marker(latlng, {icon: monumentIcon})
        }, onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.name);
          }
        }).addTo(map);
});


    window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

    var gd = document.getElementById('6c46634c-9c93-4f0e-824b-31e799b7ffd0')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }

    
    window.addEventListener('resize', function() {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });
    

    
    Plotly.plot(gd,  {
        data: figure.data,
        layout: figure.layout,
        frames: figure.frames,
        config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": true}
    });
    
