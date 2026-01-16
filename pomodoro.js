
const timerEl = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

startButton.addEventListener('click', () => {
    timerEl.textContent = "Running...";    

});

stopButton.addEventListener('click', () => {
    timerEl.textContent = "Paused";
});

resetButton.addEventListener('click', () => {
    timerEl.textContent = "25:00";
});

