let map = document.querySelector('#map');
let status = document.querySelector('#status');
let pirate = document.querySelector('#pirate');
let computer = document.querySelector('#computer');
let treasure = document.querySelector('#treasure');
let lifes = 10000;
let treasurePositionX = Math.random() * (map.clientWidth - 40);
let treasurePositionY = Math.random() * (map.clientHeight - 40);
treasure.style.left = treasurePositionX + "px";
treasure.style.top = treasurePositionY + "px";
map.addEventListener('click', mapEvent);
function mapEvent(event) {
    let x = event.clientX;
    let y = event.clientY;
    if ((x >= treasurePositionX && x <= treasurePositionX + 40) && (y >= treasurePositionY && y <= treasurePositionY + 40)){
        console.log('You found the treasure')
    } else {
        lifes -= 1;
        howFarTreasure(x, y);

    }

}
function howFarTreasure(x, y) {
    let a = x - treasurePositionX;
    let b = y - treasurePositionY;
    let c = (a * a + b * b) ** 0.5;
    if (c >= 250) {
        console.log('too cold')
    } else if (c >= 150) {
        console.log('cold')
    } else if (c >= 100) {
        console.log('warm')
    } else if (c >= 50) {
        console.log('hot')
    } else if (c >= 1) {
        console.log('very hot')
    } 
}
let computerPosX = 25;
let computerWidth = pirate.clientWidth;
let computerMoveInterval = setInterval(computerMove, 250)
function computerMove() {
    computerPosX += 25;
    computer.style.left = computerPosX + 'px';
    if (computerPosX >= computerWidth) {
        computer.remove();
        clearInterval(computerMoveInterval);
        console.log('You lose:((')
    }
}