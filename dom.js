let button = document.querySelector('#button')
let circle = document.querySelector('#circle')
button.addEventListener('click', clickEvent)
function clickEvent(event) {
    circle.className = 'is-visible';
    setTimeout(clearCircle, 250);
}
function clearCircle() {
    circle.className = '';
}