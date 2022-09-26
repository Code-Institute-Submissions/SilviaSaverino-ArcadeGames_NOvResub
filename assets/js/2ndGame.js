const computerMove = document.getElementById('computer-move');
const playerMove = document.getElementById('player-move');
const resultDisplay = document.getElementById('result');

let playerChoice;
let computerChoice;
let results;

const possibleOptions = document.querySelectorAll('button');

possibleOptions.forEach(possibleOption => possibleOption.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerMove.innerHTML = playerChoice
  generateComputerMove()
  showResult()
}));

/** let computer show an option */

function generateComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber === 0) {
    computerChoice = 'rock'
  }

  if (randomNumber === 1) {
    computerChoice = 'scissors'
  }

  if (randomNumber === 2) {
    computerChoice = 'paper'
  }

  computerMove.innerHTML = computerChoice;
}

/** show result */
function showResult() {
  if (computerChoice === playerChoice) {
    results = 'Draw!'
  }

  if (computerChoice === 'scissors' && playerChoice === "paper") {
    results = 'You lose!'
  }
  if (computerChoice === 'scissors' && playerChoice === "rock") {
    results = 'You win!'
  }

  if (computerChoice === 'rock' && playerChoice=== "paper") {
    results = 'You win!'
  }
  if (computerChoice === 'rock' && playerChoice === "scissors") {
    results = 'You lose!'
  }
  if (computerChoice === 'paper' && playerChoice === "scissors") {
    results = 'You lose!'
  }
  if (computerChoice === 'paper' && playerChoice === "rock") {
    results = 'You win!'
  }

  resultDisplay.innerHTML = results;
}

