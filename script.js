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
