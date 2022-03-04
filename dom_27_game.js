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

    }

}