let characters = document.querySelectorAll('span')
let r = 25;
let g = 50;
let b = 75;
let interval = 125;
 for (let i = 0; i < characters.length; i++) {
     const el = characters[i]
     setInterval(changeColor, interval, el);
     interval += 15;
 }
 function changeColor(el) {
     el.style.color = 'rgb(' + r +',' + g + ',' + b + ')'
     r += 5;
     g += 10;
     b += 15;
     if (r>255) {
         r = 0;
     } else if (g > 255) {
         g = 100
     } else if (b > 255) {
         b=75;
     }

 }