'use strict';

const player1el = document.getElementById('score--0');
const player2el = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

dice.classList.add('hidden');

player1el.textContent = 0;
player2el.textContent = 0;

// Rolling the dice

rollDice.addEventListener('click', function () {
  let diceValue = Math.trunc(Math.random() * 6) + 1;
  let diceFile = `dice-${diceValue}.png`;

  dice.src = diceFile;
  dice.classList.remove('hidden');
});
