let pattern = /^.Surfer/;
let patter2 = /^.Surfer/u;

console.log(pattern.test('Surfer')); // false
console.log(pattern.test('Surfer')); // false

let num = /900/y;

console.log(num.lastIndex);
console.log(num.test('200900'));