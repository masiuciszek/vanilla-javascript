// let a = {a: 1} , b = {b:2};

// let target = {};
// Object.assign(target, a ,b);
// console.log(target);


let a = {a:1} , b = {a: 10, b: 5};

let target= {};
Object.assign(target, a , b)
console.log(target);

let amount = NaN;
console.log(Object.is(amount, amount));

