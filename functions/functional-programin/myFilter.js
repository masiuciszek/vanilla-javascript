// the global Array
let nums = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];

  this.forEach(val => {
      if(callback(val) === true){
          newArray.push(val);
      }
  })

  return newArray;

};

let newNums = nums.myFilter(function(item){
  return item % 2 === 1;
});

console.log(newNums)




Array.prototype.myFilterTwo = function(callback){
    let newArray = [];

    for(let i = 0; i<this.length; i++) {
        if(callback(this[i])=== true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
  };

  let filterNums = nums.myFilterTwo(x => x > 5);
  console.log(filterNums);


