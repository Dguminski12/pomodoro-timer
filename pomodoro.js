
const timerEl = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let timeLeft = 25 * 60; // 25 minutes in seconds
let intervalId = null;

function updateDisplay() {
    timerEl.textContent = timeConvert(timeLeft);
}

function timeConvert(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
updateDisplay();

startButton.addEventListener('click', () => {
    if (intervalId !== null) return;    
    intervalId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(intervalId);
            intervalId = null;
            timeLeft = 0;
            updateDisplay();
        }

    }, 1000);
});

stopButton.addEventListener('click', () => {
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});

resetButton.addEventListener('click', () => {
    if(intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    timeLeft = 25 * 60;
    updateDisplay();
});