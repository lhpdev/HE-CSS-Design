var gatewayIcon = document.querySelector(".header-gateway");
var serverIcon = document.querySelector(".header-server");

var connectionLeft = document.querySelector(".header-connection-left");
var connectionRight = document.querySelector(".header-connection-right")

var path_pc_not_clicked = "url('./header/header-center/pc-icon.png')";
var path_pc_clicked = "url('./header/header-center/pc-icon-active.png')";

var connection_active_path = "url('./header/header-center/connection-active.png')";
var connection_unnactive_path = "url('./header/header-center/connection.png')";

var gateway_clicked = false;
var server_clicked = false;

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
    }else{
        connectionLeft.style.background = connection_unnactive_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_unnactive_path;
        connectionRight.style.backgroundSize = "100%";
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
    }else{
        connectionLeft.style.background = connection_unnactive_path;
        connectionLeft.style.backgroundSize = "100%";
        connectionRight.style.background = connection_unnactive_path;
        connectionRight.style.backgroundSize = "100%";
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