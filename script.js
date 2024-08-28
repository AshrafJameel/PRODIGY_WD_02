// script.js
let startTime, updatedTime, difference, tInterval, running = false;
let hours = 0, minutes = 0, seconds = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.innerHTML = "00:00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
