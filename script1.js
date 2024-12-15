

// Variables for stopwatch
let timerDisplay = document.querySelector('.timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
let lapsContainer = document.querySelector('.laps');

let timerInterval;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the stopwatch
startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10); // Update every 10ms
    isRunning = true;
  }
});

// Pause the stopwatch
pauseButton.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = '00:00:00';
  elapsedTime = 0;
  isRunning = false;
  lapsContainer.innerHTML = ''; // Clear lap times
});

// Record a lap
lapButton.addEventListener('click', () => {
  if (isRunning) {
    let lapTime = timerDisplay.textContent;
    let lapItem = document.createElement('li');
    lapItem.textContent = Lap: ${lapTime};
    lapsContainer.appendChild(lapItem);
  }
});

// Update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;

  let totalMilliseconds = elapsedTime % 1000;
  let totalSeconds = Math.floor(elapsedTime / 1000) % 60;
  let totalMinutes = Math.floor(elapsedTime / (1000 * 60)) % 60;

  timerDisplay.textContent = `${pad(totalMinutes)}:${pad(totalSeconds)}:${pad(
    Math.floor(totalMilliseconds / 10)
  )}`;
}

// Pad numbers to ensure two digits
function pad(num) {
  return num.toString().padStart(2, '0');
}
