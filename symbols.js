// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(typeof sym2);

// console.log(Symbol('hello') === Symbol('hello'));

// console.log(`hello ${sym1.toString()}`);

// unique ibject keys

const key1 = Symbol();
const key2 = Symbol('sym2');
const key3 = Symbol();
const key4 = Symbol('sym4')


const myObj = {};

myObj[key1] = 'prop1';
myObj[key2] = 'prop2';
myObj[key3] = 'this is just a test';
myObj[key4] = 'and this as well'
myObj.key5 = 'key5';
myObj.key6 = 'key6';

// console.log(myObj[key1]);
// console.log(myObj[key2]);
// console.log(myObj[key3]);
// console.log(myObj[key4]);


// symbold is not enumrable in for.... in

for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`)
}

// symbols is ignored by JSon.stringfy

console.log(JSON.stringify({name: 'prop'}))
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}))