
function makeConter(val){
    let count = 0;
    return function(){
        count ++;
        return count + val;
    }
}

let dogCount = makeConter(' dog');
let birdCount = makeConter(' bird');
let rabbirCount = makeConter(' rabbit');


console.log(dogCount());
console.log(birdCount());
console.log(birdCount());
console.log(dogCount());
console.log(rabbirCount());
console.log(birdCount());
console.log(dogCount());
console.log(rabbirCount());
console.log(birdCount());
console.log(rabbirCount());
console.log(rabbirCount());
console.log(rabbirCount());