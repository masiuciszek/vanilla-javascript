const dogs = ['hector', 'snickers', 'victor','hugo','hugo','snickers'];

// Set
const withSet = [...new Set(dogs)];

//filter
const withFilter = dogs.filter((item,index) => dogs.indexOf(item) === index);

//reduce
let withReduce = dogs.reduce((unique, item) =>
    unique.includes(item) ? unique : [...unique,item] , []);


console.log(withSet);
console.log(withFilter);
console.log(withReduce);


const arr = [ 'a', 'a' ,'a' ,'b', 'c'];


let a = arr.reduce((special,item) =>
    special.includes(item) ? special : [...special,item], []);
    console.log(a);

let b = [... new Set(arr)];
console.log(b);

let c = arr.filter((item,index) => arr.indexOf(item) === index);
console.log(c);

