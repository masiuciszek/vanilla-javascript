let myArr = ['cars','modules', 'dates', 'dogs', 'carrots'];
let myArr2 = [1,2,3,4,5,,6,7,8,9,10]

let randomIndex = Math.floor(Math.random()*myArr.length);
let randomNum = Math.floor(Math.random()*1239313);
let randomHexColour = Math.floor(Math.random()*16777215).toString(12);

console.log(randomHexColour);
function randomItem(val) {
    return Math.floor(Math.random()*val.length);
}


console.log(randomIndex);
console.log(randomNum);
console.log(randomHexColour);
console.log(randomItem(myArr));

