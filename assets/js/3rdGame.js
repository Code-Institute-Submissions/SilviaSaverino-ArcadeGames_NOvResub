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