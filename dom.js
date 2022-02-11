// console.dir(document)
// let navbar = document.getElementById('navbar')
// navbar.innerHTML = 'Changed'
// let main = document.getElementById('main')
// main.innerHTML = 'navbar'
// let navbar = document.getElementById('navbar')
// navbar.style.border = '5px solid red'
// let main = document.getElementById('main')
// main.style.background = 'pink'
// let titles = document.querySelectorAll('.h1')
// console.log(titles)
// let odd = document.querySelectorAll('li:nth-child(odd')
// let even = document.querySelectorAll('li:nth-child(even)')
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }
let newDiv = document.createElement('div');
newDiv.className = 'container'
let text = document.createTextNode('Hello world')
newDiv.append(text)
console.log(newDiv)
let itemsContainer = document.querySelector('#items');
let firstItem = document.getElementsByTagName('li')[0]
itemsContainer.insertBefore(newDiv, firstItem)
