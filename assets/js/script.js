const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');

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
   var player= parseInt(window.getComputedStyle(player).getPropertyValue('top'));

}, 10);

var checkCollision = setInterval(function() {
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    if(obstacleLeft < 25 && obstacle.Left > 10 && player >= 130){
        obstacle.style.animation = 'none';
        obstacle.style.display = 'none';
        alert('collision');
    }
 
 }, 10);

