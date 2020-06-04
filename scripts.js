window.onload = function()
{
    var location = document.getElementById("content");

    var newcanvas = document.createElement('canvas');

    newcanvas.width = 1000;
    newcanvas.height = 500;

    var nwc = newcanvas.getContext("2d");

    nwc.fillStyle = "#FF0000";
    nwc.fillRect(20, 20, 150, 100);

    content.appendChild(newcanvas);

}
