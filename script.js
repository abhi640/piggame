'use strict';

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
const playerScores = [0, 0];

// starting conditions
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling the dice

btnRollDice.addEventListener('click', function () {
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
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
