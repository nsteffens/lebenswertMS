window.PLOTLYENV = {
    'BASE_URL': 'https://plot.ly'
};

var gd = document.getElementById('6c46634c-9c93-4f0e-824b-31e799b7ffd0')
var resizeDebounce = null;

function resizePlot() {
    var bb = gd.getBoundingClientRect();
    Plotly.relayout(gd, {
        width: bb.width,
        height: bb.height
    });
}


window.addEventListener('resize', function () {
    if (resizeDebounce) {
        window.clearTimeout(resizeDebounce);
    }
    resizeDebounce = window.setTimeout(resizePlot, 100);
});

Plotly.plot(gd, {
    data: figure.data,
    layout: figure.layout,
    frames: figure.frames,
    config: {
        "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A",
        "linkText": "Export to plot.ly",
        "showLink": false
    }
});