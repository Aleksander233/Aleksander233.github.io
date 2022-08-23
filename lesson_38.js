let el1 = document.querySelector('.el1 > .value')
let el2 = document.querySelector('.el2 > .value')
let elementPos = el1.offsetTop
let counter = anime({
    targets: [el1, el2],
    innerHTML: [0, 1000],
    easing: 'linear',
    round: 1,
    delay: 250,
    duration: 1000,
    autoplay: false
});