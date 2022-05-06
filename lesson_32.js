const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')
const canvasWidth = canvas.clientWidth
const canvasHeight = canvas.clientHeight
const size = canvasWidth / 20
let Snake = function() {
    this.size = size
    this.color = 'green'
    this.x = 0
    this.y = 0
    this.speed = this.size
    this.speedX = this.size
    this.speedY = 0
    this.tail = [[0,0]]
    this.show = function() {
        ctx.fillStyle = this.color
        for (let i = 0; i < this.tail.length; i++) {
            const el = this.tail[i]
            ctx.fillRect(el[0], el[1], this.size, this.size)

        }
    }
}
let gameLoop = setInterval(game, 150)
let s = new Snake()
function game() {
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight)

}
