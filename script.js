
// getting elements
const gameOverModal = document.getElementById('gameOverModal');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

var timer;
var score;
var hitrn;
var timerInt; // Make timerInt global
var gameActive = false; // Track if the game is running

function startGame() {
  timer = 60;
  score = 0;
  document.querySelector('#timerVal').textContent = timer;
  document.querySelector('#scoreVal').textContent = score;
  makeBubble();
  runTimer();
  hitCount();
  gameActive = true;
}

function makeBubble() {
  let clutter = "";
  for (var i = 1; i <= 140; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.querySelector('.pbtm').innerHTML = clutter;
}

function runTimer() {
  clearInterval(timerInt); // Clear any previous interval
  timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#timerVal').textContent = timer;
    } else {
      clearInterval(timerInt);
      endGame();
    }
  }, 1000);
}

function hitCount() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector('#scoreVal').textContent = score;
}

// Only allow clicks if game is active
document.querySelector('.pbtm').addEventListener('click', function (dets) {
  if (!gameActive) return;
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    hitCount();
  }
});

// game over logic
function endGame() {
  gameActive = false;
  finalScore.textContent = score;
  gameOverModal.style.display = 'flex';
}

// restart game when button is clicked
restartBtn.addEventListener('click', function () {
  gameOverModal.style.display = 'none';
  startGame();
});

// Start the game automatically when the page loads
window.addEventListener('DOMContentLoaded', startGame);

