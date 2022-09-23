const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');
const playerHeight = 50;
const playerWidth = 30;

/**makes the character jump*/
function jump(){
    if(player.classList != 'up'){
        player.classList.add('up');
    }
    setTimeout(function(){
        player.classList.remove('up');
    },500);
}

/** check for collision every 15mSec*/

var checkCollision = setInterval(function() {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));

    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstacleLeft < 20 && obstacle.Left > 0 && player >= 130){
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('collision');
    }
   
 
 }, 10);


 /* second-game: rock-paper-scissors */

 const computerMove = document.getElementById('computer-move')
 const playerMove = document.getElementById('player-move')
 const resultDisplay = document.getElementById('result')

 let playerChoice
 let computerChoice
 let results

 const possibleOptions= document.querySelectorAll('button')
 
 possibleOptions.forEach(possibleOption => possibleOption.addEventListener('click', (e) => {
   playerChoice = e.target.id
   playerMove.innerHTML =playerChoice
   generateComputerMove()
   showResult()
 }
 ))

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

    computerMove.innerHTML = computerChoice
 }

 /** show result */
function showResult() {
    if (computerChoice === playerChoice) {
        results = 'Draw!'
    }

    if (computerChoice === 'scissors' && userChoice === "paper") {
        results = 'You lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        results = 'You win!'
      }

      if (computerChoice === 'rock' && userChoice === "paper") {
        results = 'You win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        results = 'You lose!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        results = 'You lose!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        results = 'You win!'
      }

    resultDisplay.innerHTML = results /*it doesn't show! to be fixed!*/

}