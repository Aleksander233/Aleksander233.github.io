let field = document.querySelector('#field');

let Car = function (x, y) {
    this.car = null;
    this.x = x;
    this.y = y;

    this.create = function () {
        this.car = document.createElement('div')
        this.car.classList = 'car'
        this.car.style.left = this.x + 'px'
        this.car.style.top = this.y + 'px'
        field.append(this.car)
    }
    this.moveRight = function() {
        this.x += 5
    }
    this.moveLeft = function() {
        this.x -= 5
    }
    this.moveUp = function() {
        this.y -= 5
    }
    this.moveDown = function() {
        this.y += 5
    }
    this.render = function() {
        this.car.style.left = this.x + "px";
        this.car.style.top = this.y + "px";
    }
}

let player_1 = new Car(50, 200)
player_1.create()

document.addEventListener('keydown', keyPressEvent)

function keyPressEvent(event) {
    keyCode = event.keyCode;
    if (keyCode === 87) {
        player_1.moveUp();
    } else if (keyCode === 68) {
        player_1.moveRight();
    } else if (keyCode === 83) {
        player_1.moveDown();
    } else if (keyCode === 65) {
        player_1.moveLeft();}
        player_1.render();
        console.log(keyCode)
}
let player_2 = new Car(100, 100)
player_2.create();