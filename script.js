'use strict';
const player1 = document.querySelector('.player--0 ');
const player2 = document.querySelector('.player--1 ');
const dice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');
let score1 = (document.getElementById('score--0').textContent = 0);

let score2 = (document.getElementById('score--1').textContent = 0);

let cScore1 = (document.getElementById('current--0').textContent = 0);

let cScore2 = (document.getElementById('current--1').textContent = 0);

let flage = true;
let cScore = 0;
let activePlayer = 0;
let playerScore = [0, 0];
const switchPlayer = function () {
  cScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
//hide the image when the game starts
dice.addEventListener('click', function () {
  if (flage) {
    const rndNumber = Math.trunc(Math.random() * 6) + 1; // random number from 1 to 6
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${rndNumber}.png`;
    if (rndNumber == 1) {
      switchPlayer();
    } else {
      cScore = cScore + rndNumber;
      document.getElementById(`current--${activePlayer}`).textContent = cScore;
    }
  }
});
hold.addEventListener('click', function () {
  if (flage) {
    playerScore[activePlayer] += cScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScore[activePlayer];
    if (playerScore[activePlayer] >= 10) {
      flage = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
const resetGame = function () {
  flage = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  score1 = document.getElementById('score--0').textContent = 0;
  score2 = document.getElementById('score--1').textContent = 0;

  cScore1 = document.getElementById('current--0').textContent = 0;
  cScore2 = document.getElementById('current--1').textContent = 0;
  cScore = 0;
  activePlayer = 0;
  playerScore = [0, 0];

  diceImg.classList.add('hidden');
};
newGame.addEventListener('click', resetGame);
