let veggies = ['carrots', 'broccoli', 'cucumbers', 'onions'];

let fruits = ['apples', 'bananas', 'tomatos', 'avocados', 'dates']

let spreads = ['hummus','nuts'];

// old way
let plate = veggies.concat(fruits, 'mangos');

// console.log(plate);
// console.log(fruits);
// console.log(veggies);

//ES6
let sandwich = [...veggies, ...spreads];
console.log('sandwich : ',sandwich);