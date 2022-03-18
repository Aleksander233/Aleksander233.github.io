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
}

let player_1 = new Car(50, 200)
player_1.create()

document.addEventListener('keydown', keyPressEvent)

function keyPressEvent(event) {
    console.log(event.keyCode)
}