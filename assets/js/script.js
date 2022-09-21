const player = document.getElementById('dd-player');
const obstacle = document.getElementById('dd-obstacle');

function jump(){
    if(player.classList != 'up'){
        player.classList.add('up');
    }
    setTimeout(function(){
        player.classList.remove('up');
    },500);
}