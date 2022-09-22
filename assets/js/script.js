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
 const result = document.getElementById('result')
 const score2 = document.getElementById('score2')

 const options= document.querySelector('.options')
 
 