
function makeCount(val){
        let count = 0;
    return function(){
        count ++;
        return val + count;
    }
}

let countDog = makeCount(' dog')
let countCat = makeCount(' cat')


console.log(countDog())
console.log(countDog())
console.log(countDog())
console.log(countCat())
console.log(countDog())
console.log(countDog())
console.log(countCat())
console.log(countCat())
console.log(countDog())
console.log(countDog())
console.log(countDog())
console.log(countCat())