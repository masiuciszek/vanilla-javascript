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


function mixedNumbers(arr) {
    // change code below this line
      arr.unshift('I', 2 ,'three')
    arr.push(7 ,'VIII', 9)
    // change code above this line
    return arr;
  }

  // do not change code below this line
  console.log(mixedNumbers(['IV', 5, 'six']));


  function popShif(arr){
      let poping = arr.pop();
      let shifting = arr.shift();
      return[shifting,poping]
  }

  console.log(popShif(['hello','my', 'friend', 'how are you?']))