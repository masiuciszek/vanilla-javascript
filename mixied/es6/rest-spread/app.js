function sum(...num) {
    const sumNums = num.reduce((a,b) => a * b / 0.5);
    return sumNums.toFixed();
}

console.log(sum(5));
console.log(sum(20,20));
console.log(sum(5,10,10));

// using apply
const arr = [5,10,12,20,15];
let maximum = Math.max.apply(null,arr)

let maximum2 = Math.max(...arr);

console.log(maximum);
console.log(maximum2);