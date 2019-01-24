const map1 = new Map();


// set keys
const key1 = 'some str',
      key2 = {},
      key3 = function() {};

//set map values
map1.set(key1, 'val of key1')
map1.set(key2, 'val of key2')
map1.set(key3, 'val of key3')

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// map1.set('kingen');
// console.log(map1.values());
// console.log(map1.keys());
// console.log(map1.has('kingen'));
// console.log(map1.has('kingen2'));
// console.log(map1.size);

// loop using for of
// using for of to get keys and values

// for(let [key,val] of map1){
//     console.log(`${key} = ${val}`);
// }

// for(let key of map1.keys()){
//     console.log(key)
// }

// for(let val of map1.values()){
//     console.log(val);
// }

// map1.forEach((val,key) => {
//     console.log(key,val);
// })

// create an array
const keyValArray = Array.from(map1);
console.log(keyValArray);

// create an array of the values

const valArrays = Array.from(map1.values())
console.log(valArrays);

// key array
const keyArrays = Array.from(map1.keys())
console.log(keyArrays);


const question = new Map();

question.set('question', 'correct name of kaka?');
question.set(1 , 'jose');
question.set(2 , 'mario');
question.set(3 , 'bravo');
question.set(4 , 'Ricardo');
question.set(5 , 'carlos');
question.set('correct', 4)
question.set(false, 'that is not correct , plese try again');

question.set(true, 'that is correct plese follow along')

console.log(`Question ${question.get('question')}`);

for ( let [key , value] of question) {
    if(typeof[key] === 'number') {
        console.log(`Option ${key} ${value}`)
    }
}

const answer = parseInt(`Please type your answer below, type a number`)
console.log(question.get(answer === question.get('correct')));