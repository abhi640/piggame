'use strict';

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
const playerScores = [0, 0];
let gameActive = true;

// starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// switching player function

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

// Rolling the dice

btnRollDice.addEventListener('click', function () {
  if (gameActive) {
    const diceValue = Math.trunc(Math.random() * 6) + 1;

    // choosing dice file as per random number
    const diceFile = `dice-${diceValue}.png`;
    diceEl.src = diceFile;

    //display dice

    diceEl.classList.remove('hidden');

    // current score update

    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switching player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (gameActive) {
    // add current score to active player's score

    playerScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScores[activePlayer];

    // check for winning score 100

    if (playerScores[activePlayer] >= 100) {
      gameActive = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switching player
      switchPlayer();
    }
  }
});
