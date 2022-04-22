let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext("2d")
// ctx.fillRect(50, 50, 100, 100);
// ctx.fillStyle = 'indigo';
// ctx.fillRect(50,50,100,100);
// ctx.fillStyle = 'pink'
// ctx.fillRect(100,100,100,100)
// _______________________________________________________________________
// ctx.strokeStyle = 'blue'
// ctx.strokeRect(50,50,100,100)

// ctx.lineWidth = 5
// ctx.strokeStyle = 'red'
// ctx.strokeRect(150,150,100,100)
// _______________________________________________________________________
// ctx.fillStyle = 'indigo'
// ctx.fillRect(50,50,100,100)
// ctx.clearRect(55,55,50,50)
// _______________________________________________________________________
// ctx.font = '30px Arial'
// ctx.fillStyle = 'indigo'
// ctx.fillText('Hello world!', 50,100)
// ________________________________________________________________________
// ctx.font = '30px Arial'
// ctx.fillStyle = 'indigo'
// ctx.strokeText('Hello world!', 50,100)
// _________________________________________________________________________
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.stroke();
// __________________________________________________________________________
// ctx.arc(100, 100, 40,0, Math.PI * 2);
// ctx.stroke();
// ____________________________________________________________________________
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.moveTo(150,50)
ctx.lineTo(140,70)
ctx.moveTo(140,70)
ctx.lineTo(40,70)
ctx.moveTo(40,70)
ctx.lineTo(50,50)
ctx.moveTo(50,100);
ctx.lineTo(150,100);
ctx.moveTo(150,100)
ctx.lineTo(140,120)
ctx.moveTo(140,120)
ctx.lineTo(40,120)
ctx.moveTo(40,120)
ctx.lineTo(50,100)
ctx.moveTo(40,70)
ctx.lineTo(40,120)
ctx.moveTo(50,50)
ctx.lineTo(50,100)
ctx.moveTo(140,70)
ctx.lineTo(140,120)
ctx.moveTo(150,50)
ctx.lineTo(150,100)
ctx.stroke();