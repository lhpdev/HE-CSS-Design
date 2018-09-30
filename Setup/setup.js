// var nextButton = document.querySelector('.next-button');
// var loader = document.querySelector('.loader');

// var next_clicked = false;
// var loader_active = false;

// nextButton.addEventListener("click", function() {
//     next_clicked = !next_clicked;
//     loader_active = !loader_active;
//     if (next_clicked) {
//         loader.style.display = "block";
//         loginButton.style.display = "none";
//         setTimeout(function () {
//             window.location.href = "./Boot/index.html"; //will redirect to your blog page (an ex: blog.html)
//          }, 2000); //will call the function after 2 secs.
//         login_clicked = !login_clicked;
//         loader_active = !loader_active;
//         loader.style.display = "block";
//         loginButton.display = "none";
//     }
// });

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

