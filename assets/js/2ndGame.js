const resultDisplay = document.getElementById('result');

const computerMoveImg = document.getElementById('computerMove');
const playerMoveImg = document.getElementById('playerMove');

let playerChoice;
let computerChoice;
let results;

const possibleOptions = document.querySelectorAll('button');

possibleOptions.forEach(possibleOption => possibleOption.addEventListener('click', (e) => {
  playerChoice = e.target.id

  if (playerChoice === 'scissors')
      playerMoveImg.src = 'assets/images/scissors2.png';
    
  if (playerChoice === 'paper')
      playerMoveImg.src = 'assets/images/paper2.png';
  
  if (playerChoice === 'rock')
      playerMoveImg.src = 'assets/images/rock2.png';

  generateComputerMove()
  showResult()
}));

/** let computer show an option */

function generateComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber === 0) {
    computerChoice = 'rock'
    computerMoveImg.src = 'assets/images/rock2.png';
  }

  if (randomNumber === 1) {
    computerChoice = 'scissors'
    computerMoveImg.src = 'assets/images/scissors2.png';
  }

  if (randomNumber === 2) {
    computerChoice = 'paper'
    computerMoveImg.src = 'assets/images/paper2.png';
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

