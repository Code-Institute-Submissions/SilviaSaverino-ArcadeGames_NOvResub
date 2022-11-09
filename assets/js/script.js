/*let the user open the game page by clicking on the buttons*/
const instruction = document.getElementById('instruction');
const rockBtn    = document.getElementById('rockBtn');

instruction.addEventListener('click', () => location.href="instructions.html");
rockBtn.addEventListener('click', () => location.href="rockscissor.html");