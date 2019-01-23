let myArr = ['cars','modules', 'dates', 'dogs', 'carrots'];
let myArr2 = [1,2,3,4,5,6,7,8,9,10];


let randomIndex = Math.floor(Math.random()*myArr.length);
let randomNum = Math.floor(Math.random()*1239313);
let randomHexColour = Math.floor(Math.random()*16777215).toString(12);

console.log(randomHexColour);
function randomItem(val) {
    return Math.floor(Math.random()*val.length);
}



function randomNum(num){
    return Math.round(Math.random() * num) +1;
}


function randomvalue(arr) {
    return Math.round(Math.random()*arr.length);
}


function randInt(lower,upper) {
    const spread = Math.random() * (upper - lower);

    return  Math.round(spread) + lower;
}

// console.log(randomvalue(myArr));

// console.log(randomNum(5));
// console.log(randomNum(10));
// console.log(randomNum(20));

// console.log(randomIndex);
// console.log(randomNum);
// console.log(randomHexColour);
// console.log(randomItem(myArr));

