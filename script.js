'use strict';

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
const playerScores = [0, 0];

diceEl.classList.add('hidden');

// starting conditions
score1El.textContent = 0;
score2El.textContent = 0;

let currentScore = 0;

// Rolling the dice

btnRollDice.addEventListener('click', function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  let diceFile = `dice-${diceValue}.png`;

  diceEl.src = diceFile;
  diceEl.classList.remove('hidden');

  // current score update

  currentScore += diceValue;

  if (diceValue != 1) {
    document.querySelector('#current--${activePlayer}').textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  }
});

// Add current Score
