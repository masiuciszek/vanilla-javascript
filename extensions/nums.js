let sum = 408.2;

console.log(Number.isInteger(sum)) // false

console.log(NaN);
console.log(Infinity)
console.log(undefined)
console.log(10);

let pow =  Math.pow(2, 53) -1;

console.log(Number.isSafeInteger(pow));

pow = Math.pow(2, 53);
console.log(Number.isSafeInteger(pow));

console.log('test ', Math.pow(2,53) - 1); // true , no decimals