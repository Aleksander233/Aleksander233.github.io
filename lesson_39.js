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
document.addEventListener('scroll', scrollEvent)
let animation = false
function scrollEvent(event) {
    let posY = window.scrollY + window.innerHeight
    if ((posY - elementPos > 0) &&  !animation) {
        animation = true
        counter.play()
    }
}
let main = document.querySelector('main')
let mainHeader = document.querySelector('main > h1')
let box = document.querySelector('.box')
anime({
    targets: main,
    backgroundColor: '#2a2b5f',
    easing: 'easeInOutQuad',
    duration: 1000,
})
anime({
    targets: mainHeader,
    top: '35%',
    opacity: 1,
    duration: 1500
})
anime({
    targets: box,
    translateX: -50,
    scale: 2,
    rotate: '1turn',
    borderRadius: ['0%', '5'],
    duration:1500,
})
let bar = document.querySelector('main > .bar')
let secondaryText = document.querySelector('main > .bar > h4')
anime({
    targets: bar,
    width: '100%',
    easing: 'easeInOutQuad',
    duration: 1000,
})
anime({
    targets: secondaryText,
    translateY: -100,
    opacity: 1,
    delay: 900,
})