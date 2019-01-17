const myFunc = () => {};
const myFunc2 = function(){}
const arr = []
const map = {};

function ifFunction(func) {
    let jsFunc = func;
    if( typeof jsFunc === 'function'){
        return true;
    } else {
        return false;
    }
}

console.log(ifFunction(myFunc));
console.log(ifFunction(myFunc2));
console.log(ifFunction(arr));
console.log(ifFunction(map));

const ifFunction2 = fu => typeof fu === 'function' ? true : false;

console.log(ifFunction2(myFunc));
console.log(ifFunction2(myFunc2));
console.log(ifFunction2(arr));
console.log(ifFunction2(map));
