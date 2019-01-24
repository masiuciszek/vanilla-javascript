

// let salaries = [9000];
// let salaries2 = Array.of(9000);

// let amounts = [100,200,300];

// let cash = Array.from(amounts, v => v+100);
// let cash2 = amounts.map(x => x + 100);

// console.log(salaries.length);
// console.log(salaries2.length);

// console.log(cash);
// console.log(cash2);

// const amounts = [100,200,300];
// let salaries = Array.from(amounts, function(v){
//     return v + this.adjustment;
// }, { adjustment: 100 });
// console.log(salaries);

let salaries2 = [700,400,332];

let nums = [100,500,600 ,5000,6000];

// salaries2.fill(900);
//  let [hundred,fivrhoundred, six, andTheRest] = nums;
// console.log(salaries2);

// nums.fill(90000, 1 ,2);

// console.log(nums);

salaries2.fill(900, -1);
console.log(salaries2);

let result = nums.find(num => num >= 600);
console.log(result);

let result2 = salaries2.findIndex(val => val === this,400);

console.log(result2);

salaries2.copyWithin(2,0);
console.log(salaries2);
salaries2.copyWithin(0,1);

let ids = ['a','b','c'];
console.log(...ids.entries());
console.log(...ids.keys());
console.log(...ids.value);
