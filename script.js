'use strict';

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current1El = document.getElementById('current--0');
const current2El = document.getElementById('current--1');

let activePlayer, playerScores, gameActive, currentScore;

const init = function () {
  // starting conditions
  activePlayer = 0;
  playerScores = [0, 0];
  gameActive = true;
  currentScore = 0;

  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;

  diceEl.classList.add('hidden');

  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');
};

init();

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

btnNewGame.addEventListener('click', init);
