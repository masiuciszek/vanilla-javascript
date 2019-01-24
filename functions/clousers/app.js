

// proble  here we sharing the same global variable
// with booth functions
// let count = 0;

// function countBirds(){
//     count++;
//     return count + ' birds ';
// }

// function countDogs(){
//     count++;
//     return count + ' dogs ';
// }

// console.log(countDogs());
// console.log(countDogs())
// console.log(countDogs())
// console.log(countDogs())
// console.log(countDogs())
// console.log(countDogs())
// console.log(countBirds());
// console.log(countBirds());
// console.log(countBirds());

// let birds = 3;
// function dogHouse(){
//     let dogs = 8;
//     function showDogs(){
//         console.log(dogs);
//     }
//     return showDogs;
// }

// let getDogs = dogHouse();

// getDogs();


// let count = 0;

// function makeDogCounter(){
//     let count = 0;
//     return function (){
//         count++;
//         return count + ' Woof ';
//     }
// }

// function countCats(){
//     count++;
//     return count + ' majjjau ';
// }

// let dogCounter = makeDogCounter();
// let dogCounter2 = makeDogCounter();

// console.log(dogCounter());
// console.log(dogCounter());
// console.log(dogCounter());
// console.log(dogCounter());
// console.log(dogCounter());
// console.log(dogCounter());
// console.log(countCats());
// console.log(countCats());
// console.log(countCats());
// console.log(countCats());
// console.log(dogCounter2())
// console.log(dogCounter2())
// console.log(dogCounter2())


function makeCounter(value){
    let count = 0;
    return function(){
        count++
        return count + value
    }
}

let birdConter = makeCounter('bird');
let dogCounter = makeCounter('dogs');

console.log(birdConter());
console.log(birdConter());
console.log(birdConter());
console.log(birdConter());
console.log(birdConter());
console.log(dogCounter());
console.log(dogCounter());
console.log(dogCounter());