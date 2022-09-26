const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');
const startBtn = document.getElementById('startBtn');

  startBtn.addEventListener('click', () => {
    startGame();
    startBtn.hidden = true; /*stop displaying start button after click*/
    
    /*avoids starting the game and jumping at the same time using a setTimeout delay*/
    setTimeout(() => {
      document.addEventListener('click', jump);
    }, 50);
  });

function startGame() {
  obstacle.classList.add('startG1');
}

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
    /*stop the monkey from running across the playground*/
    obstacle.classList.remove('startG1');
    
    
    /* display result on collision and let the user start the game again*/ 
    startBtn.textContent = 'GAME OVER! Play again?';
    startBtn.hidden = false;
    /*avoid jumping on click once the game restart*/
    document.removeEventListener('click', jump);
  }


}, 10);
