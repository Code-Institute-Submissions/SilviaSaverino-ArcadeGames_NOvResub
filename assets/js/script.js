const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');
/*const playerHeight = 50;
const playerWidth = 30;*/

/**makes the character jump*/
function jump() {
  if (player.classList != 'up') {
    player.classList.add('up');
  }
  setTimeout(function () {
    player.classList.remove('up');
  }, 500);
}

/** check for collision every 15mSec*/

var checkCollision = setInterval(function () {
  // var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));

  var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

  if (obstacleLeft < 60 && obstacleLeft > 30 && !player.classList.contains('up')) {
    obstacle.style.animation = 'none';
    obstacle.style.display = 'none';
    alert('collision');
  }


}, 10);




/* --------------------------------------------second-game: rock-paper-scissors -------------------------------------*/

const computerMove = document.getElementById('computer-move')
const playerMove = document.getElementById('player-move')
const resultDisplay = document.getElementById('result')

let playerChoice
let computerChoice
let results

const possibleOptions = document.querySelectorAll('button')

possibleOptions.forEach(possibleOption => possibleOption.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerMove.innerHTML = playerChoice
  generateComputerMove()
  showResult()
}))

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


/*-----------------------------------------------third game-----------------------------------------------*/
var playgroundC = document.getElementById('playground-c');
var ball = document.getElementById('ball');

var wall = document.getElementById('wall');
var crater = document.getElementById('crater');

var both = 0;

/** move the ball to the right */
function moveRight() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  if (left < 470) {
    ball.style.left = left + 2 + "px";
  }


}

/** move the ball to the left */
function moveLeft() {
  var left = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
  if (left > 0) {
    ball.style.left = left - 2 + "px";
  }


}

document.addEventListener("keydown", event => {
  /*avoid pressing left and right together*/
  if (both==0) {
    both++;
    /*moving the ball left and right*/
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }

});

/*stop the ball moving*/
document.addEventListener('keyup', event => {
  clearInterval(interval);
  both=0;
});


/*create more craters*/
var random = Math.floor(Math.random() * 470) /*width of the playground - width of the ball*/
crater.style.left = random + 'px'; /*its position should be random on every reload ---------------------> to be fixed*/