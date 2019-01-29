// my map prototype
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.

// the global Array
var nums = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];

  this.forEach(val => newArray.push(callback(val)));

  return newArray;

};

let newNums = nums.myMap(function(item){
  return item * 2;
});

let newNums2 = nums.myMap(a => a / 2);

console.log(newNums);
console.log(newNums2);