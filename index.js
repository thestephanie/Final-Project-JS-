// Code below is for to-do list. 
const list = document.querySelector('.list');
const input = document.querySelector('.enter-item-input');
const button = document.querySelector('.add-item-button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}

// Code below is for timer. 
const timerText = document.querySelector('.timer-text')
const startButton = document.querySelector('.start-button')

let isTimerRunning = false;
let interval = null;

startButton.onclick = function() {
  let timeLeft = 25 * 60;
  if (isTimerRunning === false) {
    startButton.innerText = 'Stop'
    isTimerRunning = true;
    // Time in seconds
    function updateTimer() {
      if (timeLeft > 0) {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        const displayTime = minutes + ':' + seconds;
        timerText.innerText = displayTime;
      } else if (interval !== null) {
        clearInterval(interval)
        startButton.innerText = 'Start'
      }
    }
    interval = setInterval(updateTimer, 1000);
  } else {
    if (interval !== null) {
      clearInterval(interval);
      startButton.innerText = 'Start'
    }
  }
}