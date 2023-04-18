'use strict';
//Selecting Elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Starting Conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
