var gatewayIcon = document.querySelector(".header-gateway");
var serverIcon = document.querySelector(".header-server");
var bouncingIcon = document.querySelector(".header-bouncing");
var terminalIconOne = document.querySelector("#one");
var terminalIconTwo = document.querySelector("#two");
var terminalIconThree = document.querySelector("#three");
var terminalIconFour = document.querySelector("#four");
var terminalIconFive = document.querySelector("#five");
var notificationsGlobalIcon = document.querySelector(".notification-main");
var connectionLeft = document.querySelector(".header-connection-left");
var connectionRight = document.querySelector(".header-connection-right")
var notificationsPool = document.querySelector(".notification__pool-container");
var document = document.querySelector('.main-screen');
var logViewerApplication = document.querySelector('.application-view-container');
var logViewerApplicationCloseButton = document.querySelector('.application-view__close-button');

var path_pc_not_clicked = "url('./public/images/header/header-center/pc-icon.png')";
var path_pc_clicked = "url('./public/images/header/header-center/pc-icon-active.png')";

var connection_active_path = "url('./public/images/header/header-center/connection-active.png')";
var connection_inactive_path = "url('./public/images/header/header-center/connection.png')";

var terminalIcon_active_path = "url('./public/images/bottom-menu/terminal-icon-active.png')";
var terminalIcon_inactive_path = "url('./public/images/bottom-menu/terminal-icon.png')";

var gateway_clicked = false;
var server_clicked = false;
var terminalIcon_clicked = false;
var notificationsIcon_clicked = false;
var notificationPoolOpen = false;
var logViewerApplicationOpen = false;

notificationsPool.style.visibility = 'hidden';
logViewerApplication.style.visibility = 'hidden';

var current_date = Date();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('left-panel-clock').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();

gatewayIcon.addEventListener("click", function() {
    gateway_clicked = !gateway_clicked;
    if (gateway_clicked) {
        gatewayIcon.style.background = path_pc_clicked;
        gatewayIcon.style.backgroundSize = "100%";
        gatewayIcon.style.opacity = 1;
    }else {
        gatewayIcon.style.background = path_pc_not_clicked;
        gatewayIcon.style.backgroundSize = "100%";
        gatewayIcon.style.opacity = 0.7;

    }
    if(gateway_clicked && server_clicked){
        connectionLeft.style.background = connection_active_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_active_path;
        connectionRight.style.backgroundSize = "100%";
        bouncingIcon.style.opacity = 1;
    }else{
        connectionLeft.style.background = connection_inactive_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_inactive_path;
        connectionRight.style.backgroundSize = "100%";
        bouncingIcon.style.opacity = 0.7;
    }
});

gatewayIcon.addEventListener("mouseover", function() {
    gatewayIcon.style.opacity = 1;
});

gatewayIcon.addEventListener("mouseout", function() {
    if (!gateway_clicked) {
        gatewayIcon.style.opacity = 0.7;
    }
});


serverIcon.addEventListener("click", function() {
    server_clicked = !server_clicked;
    if (server_clicked) {
        serverIcon.style.background = path_pc_clicked;
        serverIcon.style.backgroundSize = "100%";
        serverIcon.style.opacity = 1;
    }else {
        serverIcon.style.background = path_pc_not_clicked;
        serverIcon.style.backgroundSize = "100%";
        serverIcon.style.opacity = 0.7;
    }
    if(gateway_clicked && server_clicked){
        connectionLeft.style.background = connection_active_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_active_path;
        connectionRight.style.backgroundSize = "100%";
        bouncingIcon.style.opacity = 1;
    }else{
        connectionLeft.style.background = connection_inactive_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_inactive_path;
        connectionRight.style.backgroundSize = "100%";
        bouncingIcon.style.opacity = 0.7;
    }
});

serverIcon.addEventListener("mouseover", function() {
    serverIcon.style.opacity = 1;
});

serverIcon.addEventListener("mouseout", function() {
    if (!server_clicked) {
        serverIcon.style.opacity = 0.7;
    }
});

terminalIconOne.addEventListener("click", function() {
    terminalIcon_clicked = !terminalIcon_clicked;
    if (terminalIcon_clicked) {
        terminalIconOne.style.background = terminalIcon_active_path;
        terminalIconOne.style.width = "3rem";
        terminalIconOne.style.height = "3rem";
        logViewerApplication.style.visibility = "visible";
        logViewerApplicationOpen = true;
    }else {
        terminalIconOne.style.background = terminalIcon_inactive_path;
        terminalIconOne.style.width = "3rem";
        terminalIconOne.style.height = "3rem";
        logViewerApplication.style.visibility = "hidden";
        logViewerApplicationOpen = false;
    }
});

logViewerApplicationCloseButton.addEventListener("click", function() {
    logViewerApplicationOpen = !logViewerApplicationOpen;
    logViewerApplication.style.visibility = "hidden";
    terminalIconOne.style.background = terminalIcon_inactive_path;
})

terminalIconOne.addEventListener("mouseover", function() {
    terminalIconOne.style.opacity = 0.7;
});

terminalIconOne.addEventListener("mouseout", function() {
    if (!terminalIcon_clicked) {
        terminalIconOne.style.opacity = 0.7;
    }
});

terminalIconTwo.addEventListener("click", function() {
    terminalIcon_clicked = !terminalIcon_clicked;
    if (terminalIcon_clicked) {
        terminalIconTwo.style.background = terminalIcon_active_path;
        terminalIconTwo.style.width = "3rem";
        terminalIconTwo.style.height = "3rem";
    }else {
        terminalIconTwo.style.background = terminalIcon_inactive_path;
        terminalIconTwo.style.width = "3rem";
        terminalIconTwo.style.height = "3rem";
    }
});

terminalIconTwo.addEventListener("mouseover", function() {
    terminalIconTwo.style.opacity = 0.7;
});

terminalIconTwo.addEventListener("mouseout", function() {
    if (!terminalIcon_clicked) {
        terminalIconTwo.style.opacity = 0.7;
    }
});

terminalIconThree.addEventListener("click", function() {
    terminalIcon_clicked = !terminalIcon_clicked;
    if (terminalIcon_clicked) {
        terminalIconThree.style.background = terminalIcon_active_path;
        terminalIconThree.style.width = "3rem";
        terminalIconThree.style.height = "3rem";
    }else {
        terminalIconThree.style.background = terminalIcon_inactive_path;
        terminalIconThree.style.width = "3rem";
        terminalIconThree.style.height = "3rem";
    }
});

terminalIconThree.addEventListener("mouseover", function() {
    terminalIconThree.style.opacity = 0.7;
});

terminalIconThree.addEventListener("mouseout", function() {
    if (!terminalIcon_clicked) {
        terminalIconThree.style.opacity = 0.7;
    }
});

terminalIconFour.addEventListener("click", function() {
    terminalIcon_clicked = !terminalIcon_clicked;
    if (terminalIcon_clicked) {
        terminalIconFour.style.background = terminalIcon_active_path;
        terminalIconFour.style.width = "3rem";
        terminalIconFour.style.height = "3rem";
    }else {
        terminalIconFour.style.background = terminalIcon_inactive_path;
        terminalIconFour.style.width = "3rem";
        terminalIconFour.style.height = "3rem";
    }
});

terminalIconFour.addEventListener("mouseover", function() {
    terminalIconFour.style.opacity = 0.7;
});

terminalIconFour.addEventListener("mouseout", function() {
    if (!terminalIcon_clicked) {
        terminalIconFour.style.opacity = 0.7;
    }
});

terminalIconFive.addEventListener("click", function() {
    terminalIcon_clicked = !terminalIcon_clicked;
    if (terminalIcon_clicked) {
        terminalIconFive.style.background = terminalIcon_active_path;
        terminalIconFive.style.width = "3rem";
        terminalIconFive.style.height = "3rem";
    }else {
        terminalIconFive.style.background = terminalIcon_inactive_path;
        terminalIconFive.style.width = "3rem";
        terminalIconFive.style.height = "3rem";
    }
});

terminalIconFive.addEventListener("mouseover", function() {
    terminalIconFive.style.opacity = 0.7;
});

terminalIconFive.addEventListener("mouseout", function() {
    if (!terminalIcon_clicked) {
        terminalIconFive.style.opacity = 0.7;
    }
});

notificationsGlobalIcon.addEventListener("click", function() {
    notificationsIcon_clicked = !notificationsIcon_clicked;

    if (!notificationPoolOpen && notificationsIcon_clicked) {
        notificationsPool.style.visibility = 'visible';
    }else{
        notificationsPool.style.visibility = 'hidden';
    }
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const notification = "notifications";
dragElement(document.getElementById(notification));

const logviewer = "logviewer";
dragElement(document.getElementById(logviewer));