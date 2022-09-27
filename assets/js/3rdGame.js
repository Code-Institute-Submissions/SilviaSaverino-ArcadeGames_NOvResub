var playgroundC = document.getElementById('playground-c');
var ball = document.getElementById('ball');

var wall = document.getElementById('wall');
var crater = document.getElementById('crater');

var both = 0;

var counter = 0;

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
  if (both == 0) {
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
  both = 0;
});


/*create more craters*/
/*var random = Math.floor(Math.random() * 470) /*width of the playground - width of the ball*/
/*crater.style.left = random + 'px'; /*create a random position of the crater*/
/** creates move walls */





setInterval(function () {
  /*generate more craters*/
  var random = Math.floor(Math.random() * 470) /*width of the playground - width of the ball*/
  crater.style.left = random + 'px'; /*create a random position of the crater*/

/*----------------DOESN'T WORK YET ------------------------*/
  /*assign different positions to walls */
  var lastWall = document.getElementById('wall' + (counter - 1));
  var lastCrater = document.getElementById('crater' + (counter - 1));
  if(counter>0){
    var lastWallTop = parseInt(window.getComputedStyle(lastWall).getPropertyValue("top"));
    var lastCraterTop = parseInt(window.getComputedStyle(lastCrater).getPropertyValue("top"));
  }

 
  /*add counter to keep track of how many wall and craters are*/
  document.getElementById('wall' + counter);
  document.getElementById('crater' + counter);
  wall.style.top = lastWallTop + 100 + 'px';
  crater.style.top = lastCraterTop + 100 + 'px';

  counter++;

}, 1);