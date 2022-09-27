var playgroundC = document.getElementById('playground-c');
var ball = document.getElementById('ball');

var wall = document.querySelector('#wall');
var crater = document.querySelector('#crater');

var wallTop = parseInt(window.getComputedStyle(wall).getPropertyValue("margin-top"));
var craterTop = parseInt(window.getComputedStyle(crater).getPropertyValue("margin-top"));

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

var random = Math.floor(Math.random() * 470) /*width of the playground - width of the ball*/
crater.style.left = random + 'px'; /*create a random position of the crater*/

function createWall() {
  ++counter;

  var newWall = wall.cloneNode();
  newWall.id = 'wall' + counter.toString();
  wall.after(newWall);

  var newCrater = crater.cloneNode();
  newCrater.id = 'crater' + counter.toString();
  newWall.appendChild(newCrater);

  newWall.style.marginTop = wallTop + 10 * counter + 'px';

  var random = Math.floor(Math.random() * 470) /*width of the playground - width of the ball*/
  newCrater.style.left = random + 'px'; /*create a random position of the crater*/
}

for (let index = 0; index < 5; index++) {
  createWall();
}
