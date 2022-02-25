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
let button = document.querySelector('#button')
button.addEventListener('click', buttonClick)
let navbar = document.querySelector('#navbar')
function buttonClick() {
    navbar.textContent = 'Did you push the button?'
}
let form = document.querySelector('form');
let items = document.querySelector('#items');
form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();
    let input = document.querySelector('input[type="text"]').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    li.className = 'list-group-item';
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton)
    items.appendChild(li);
}
items.addEventListener('click', deleteItem);
function deleteItem(event) {
    let li = event.target.parentElement;
    items.removeChild(li);
}