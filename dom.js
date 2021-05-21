// console.dir(document)
// console.log(document.head)
// console.log(document.body)
// document.title = 'New Title'
// console.log(document.title)
// document.all[8].textContent = "NEW NAVBAR"
// let navbar = document.getElementById('navbar')

// navbar.innerHTML = 'Changed'

// let Navbar = document.getElementById('main')

// Navbar.innerHTML = 'NEW'
// let navbar = document.getElementById('navbar')
// navbar.style.border = '5px solid red'
// let main = document.getElementById('main')
//  main.style.backgroundColor = 'pink'
// let items = document.getElementsByClassName('list-group-item')
// console.log(items)

// items[1].innerHTML = 'NEW CONTENT'
// items[1].style.backgroundColor = 'yellow'
// items[1].style.color = 'red'

// for (let el in items) {
//     items[el].textContent = el
//     items[el].style.color = 'red';
//     items[el].style.backgroundColor = 'yellow';
// }
// let header = document.querySelector('#navbar')
// header.style.borderBottom = 'solid 5px red'
// let input = document.querySelector('input')
// input.value = 'Hello World'
// let  titles = document.querySelectorAll('.h1')
// console.log(titles)
// for (let el in items) {
//     items[el].style.backgroundColor = 'grey';

// }
let newDiv = document.createElement('div');

console.log(newDiv)

newDiv.className = 'container'

console.log(newDiv)

let text = document.createTextNode('Hello world')
newDiv.append(text)

console.log(newDiv)

let itemsContainer = document.querySelector('#items');
let firstItem = document.getElementsByTagName('li')[0]

itemsContainer.insertBefore(newDiv, firstItem)
let button = document.querySelector('#button')

button.addEventListener('click', buttonClick)
let navbar = document.querySelector('#navbar a');

function buttonClick() {
    navbar.textContent = 'Did u want push the button?'
}

let output = document.querySelector('#output')
let box = document.querySelector('#box')
box.addEventListener('mousemove', runEvent);

function runEvent(event) {
    output.innerHTML = '<h3>MouseX ' + event.offsetX + '</h3> ' + '<h3>MouseY ' + event.offsetY + '</h3>';
    box.style.backgroundColor = 'rgb(' + event.offsetX + ',' + event.offsetY + ', 40)';
}

let input = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let items = document.querySelector('#items')

form.addEventListener('submit', addItem);

input.addEventListener('keydown', runEvent);

function runEvent(event) {
    output.innerHTML = '<h4>' + event.target.value + '</h4>';
}
function addItem(event) {
    event.preventDefault();
    let input = document.querySelector('input[type="text"]').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    li.className = "list-group-item"

    let deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-danger btn-sm float-right';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);

    items.appendChild(li);

}
items.addEventListener('click', deleteItem);

function deleteItem(event) {
    let li = event.target.parentElement;
    items.removeChild(li);
}