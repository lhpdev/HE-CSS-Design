var nextButton = document.querySelector('.next-button');
var loader = document.querySelector('.loader');
var backButton = document.querySelector('.back-button');
var stepOneScreen = document.querySelector('.step_one');
var stepTwoScreen = document.querySelector('.step_two');
var stepThreeScreen = document.querySelector('.step_three');
var progressBarLeft = document.querySelector('.progress-bar__left');
var progressBarCenter = document.querySelector('.progress-bar__center');
var progressBarRight = document.querySelector('.progress-bar__right');

var next_button_counter = 0;
var loader_active = false;

function updateBackButton () {
	console.log('updateBackButton');
	if (next_button_counter > 0) {
		backButton.style.visibility = "visible";
	} else {
		backButton.style.visibility = "hidden";
	}
}

function setProgressBarLeft() {
	progressBarLeft.style.height = "0.5rem";
	progressBarLeft.style.opacity = "1";
	progressBarCenter.style.height = "0.2rem";
	progressBarCenter.style.opacity = "0.35";
	progressBarRight.style.height = "0.2rem";
	progressBarRight.style.opacity = "0.35";
}

function setProgressBarCenter() {
	progressBarLeft.style.height = "0.2rem";
	progressBarLeft.style.opacity = "0.35";
	progressBarCenter.style.height = "0.5rem";
	progressBarCenter.style.opacity = "1";
	progressBarRight.style.height = "0.2rem";
	progressBarRight.style.opacity = "0.35";
}

function setProgressBarRight() {
	progressBarLeft.style.height = "0.2rem";
	progressBarLeft.style.opacity = "0.35";
	progressBarCenter.style.height = "0.2rem";
	progressBarCenter.style.opacity = "0.35";
	progressBarRight.style.height = "0.5rem";
	progressBarRight.style.opacity = "1";
}

function setStepOneScreen(){
	stepOneScreen.style.visibility = "visible";
	stepOneScreen.style.display = "inherit";
	stepTwoScreen.style.visibility = "hidden";
	stepTwoScreen.style.display = "none";
	stepThreeScreen.style.visibility = "hidden";
	stepThreeScreen.style.display = "none";
}

function setStepTwoScreen(){
	stepOneScreen.style.visibility = "hidden";
	stepOneScreen.style.display = "none";
	stepTwoScreen.style.visibility = "visible";
	stepTwoScreen.style.display = "inherit";
	stepThreeScreen.style.visibility = "hidden";
	stepThreeScreen.style.display = "none";
}

function setStepThreeScreen(){
	stepOneScreen.style.visibility = "hidden";
	stepOneScreen.style.display = "none";
	stepTwoScreen.style.visibility = "hidden";
	stepTwoScreen.style.display = "none";
	stepThreeScreen.style.visibility = "visible";
	stepThreeScreen.style.display = "inherit";
}

function updateContentInfo() {
	if (next_button_counter == 0) {
		console.log('left');
		setProgressBarLeft();
		setStepOneScreen();
	} else if (next_button_counter == 1) {
		console.log('center');
		setProgressBarCenter();
		setStepTwoScreen();
	} else {
		console.log('right');
		setProgressBarRight();
		setStepThreeScreen();
	}
}

backButton.addEventListener("click", function() {
	next_button_counter--;
	updateBackButton();
	updateContentInfo();
	console.log(next_button_counter);
});

nextButton.addEventListener("click", function() {
	if (next_button_counter > 1){
		window.location.href = "./dashboard.html";
		console.log(next_button_counter);
	} else {
		next_button_counter++;
		updateBackButton();
		updateContentInfo();
		console.log(next_button_counter);
	}
});

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

