window.PLOTLYENV={'BASE_URL': 'https://plot.ly'};

var gd = document.getElementById('8e6a0d45-323b-447a-8d49-012ad97f6606')
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
    data: bike_figure.data,
    layout: bike_figure.layout,
    frames: bike_figure.frames,
    config: {"mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A", "linkText": "Export to plot.ly", "showLink": false}
});
