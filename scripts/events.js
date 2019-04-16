/*
    Makayla Linnastruth
    February 25, 2019
    INFO 2220
    Jon Holmes
    Assignment 6 Purpose: This is a JavaScript page to practice event delegation.
*/
function moveMouse(e) {
    var evt = e || window.event;
    var coordinates = document.getElementById("mouseCoords");
    coordinates.innerText = "x: " + e.x + " y: " + e.y;
}

function mousePressed(e) {
    var evt = e || window.event;
    var trgt = evt.target || evt.srcElement;
    if (trgt != evt.currentTarget) {
        trgt.className = "pressed";
    }
}

function resetClass(e) {
    var evt = e || window.event;
    var trgt = evt.target || evt.srcElement;
    trgt.className = "";
}

function mouseHeadOver(e) {
    var evt = e || window.event;
    var trgt = evt.target || evt.srcElement;
    trgt.className = "overHead";
}



window.onload = function (e) {
    var evt = e || window.event;
    var section = document.getElementById("secMouser");
    section.onmousemove = moveMouse;
    section.onmousedown = mousePressed;
    section.onmouseup = resetClass;

    var heading = document.getElementsByTagName("H1")[0];
    heading.onmouseover = mouseHeadOver;
    heading.onmouseout = resetClass;

    var button = document.getElementById("btnSayHello");
    button.onclick = function (e) {
        var evt = e || window.event;
        alert("Hello!")
    }

    button.onmousemove = function (e) {
        var evt = e || window.event;
        evt.stopPropagation();
        evt.cancelBubble = true;
        var newCoordinates = document.getElementById("mouseCoords");
        newCoordinates.innerText = "Over the button";
    }
}