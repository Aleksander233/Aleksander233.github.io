let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let Circle = function(x,y, size, color) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.dx = 5
    this.dy = 4
    this.drawCircle = function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    this.move = function() {
        
        this.x += this.dx;
        this.y += this.dy;
        this.collision()
    }
    this.collision = function() {
        if (this.x + this.size > canvas.clientWidth || this.x - this.size < 0) {
            this.dx *= -1;
        }
        if (this.y + this.size > canvas.clientHeight || this.y - this.size < 0) {
            this.dy *= -1;
        }
    }
    this.detectCollision = function(other) {
        for (let i = 0; i < other.length; i++) {
            const el  = other[i];
            if (el != this) {
                let distanceX = this.x - el.x
                let distanceY = this.y - el.y
                let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
                if (distance < this.size + el.size) {
                    let tmX = this.dx
                    let tmY = this.dy
                    this.dx = el.dx
                    this.dy = el.dy
                    el.dx = tmX
                    el.dy = tmY
                }
            }
        }
    }

}
let c1 = new Circle(20,20,20,'red')
let c2 = new Circle(50,75,30,'green')
let c3 = new Circle(35,150,15,'blue')
let circles = [c1,c2,c3]
function update() {
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight)
    for (let i = 0; i < circles.length; i++) {
        const c = circles[i]
        c.move()
        c.detectCollision(circles)
        c.drawCircle()
        }
    requestAnimationFrame(update)
}
update()