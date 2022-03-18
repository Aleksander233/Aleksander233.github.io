// let cat = {name: 'fluffy', color: 'white'}
// console.log(cat.name)
// console.log(cat.color)
// let speak = function() {
//     console.log('My name is ' + this.name)
// }
// cat = {name: 'fluffy', color: 'white', speak: speak }
// cat.speak()
let Animal = function(name, type) {
    this.name = name;
    this.type = type;

    this.speak = function() {
        console.log('Hello my name is ' + this.name + ' and i am ' + this.type)
    }
    this.walk = function() {
        console.log(this.name + ' walking...')
    }
}
fluffy = new Animal('fluffy', ' cat')
rocket = new Animal('rocket', 'dog')

fluffy.speak();
rocket.speak();
fluffy.walk();
rocket.walk();
