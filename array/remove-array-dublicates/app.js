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



const dragons = ['fluffy','milik','argon','blade','blade','blade','flyffy'];

let specialDragons = [...new Set(dragons)]

console.log(specialDragons);


let specialDragons2 = dragons.reduce((special,item) =>
    special.includes(item) ? special : [...special,item], []);

console.log(specialDragons2);

let specialDragons3 = dragons.filter((item,index) => dragons.indexOf(item) === index);

console.log(specialDragons3);

