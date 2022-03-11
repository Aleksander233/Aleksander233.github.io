let cat = {name: 'fluffy', color: 'white'}
console.log(cat.name)
console.log(cat.color)
let meow = function() {
    console.log('Meow!')
}
cat = {name: 'fluffy', color: 'white', speak: meow }
cat.speak()