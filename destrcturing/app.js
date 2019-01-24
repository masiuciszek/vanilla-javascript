

// let salary = ['32323','333','2324'];
// let cash = ['222','444','334']
// let flooos = ['3232','90000','60000', ['323333','100000']];

// let [one,second,third,] = salary;
// let [uno,,trees] = cash;
// let [ett,tva,tre,[fyra,fem]] = flooos

// console.log(salary);
// console.log(trees);
// console.log(fem);


// function reviewSalary([low,avrage], high = '10000'){
//     console.log(avrage)
// }

// reviewSalary(['111','222']);

// let person = {
//     name: 'aleks',
//     age: 33,
//     address: {
//         city: 'LA',
//         street: 43
//     }
// }

// const {name:namn, age }  = person;
// const {city} = person.address

// console.log(namn,age, city);


// // destructuring a string

// let [maxCode , minCode] = 'AZ';

// console.log(`min: ${minCode} max: ${maxCode}`);


// for(let [ a ,b] of [[5,10]]){
//     console.log(`${a} ${b}`);
// }



let a, b;

[a ,b] = [100 , 200];
console.log(a , b);
const nums = [444,333,222,111,23233,232,222,22,111];
const [num1,num2, ...restOfTheNums] = nums;
console.log(restOfTheNums);
const names = ['alesk', 'boris', 'tina'];
const [name1, name2 ,name3] = names;
console.log(name1);

({a,b,...rest} = {a:100, b:200, c:300, d:400, e:500});

console.log(a,b);
console.log(rest);

// parse array from func

function getPeople(){
    return ['jphn','patirc', 'mia'];
}


[person1,person2,person3] = getPeople();
console.log(person1, person2, person3);


const person = {
    name: 'arthur',
    age: 33,
    location: 'boston',
    social: ['facebook', 'twitter'],
    address: {
        area: 'BA',
        postNum: 323322,
        colors:{
            one: 'red',
            two: 'blue'
        }
    }
}

const { name } = person
const { social } = person;
console.log(name);
console.log(social[0]);
console.log(social[1]);
const {address} = person;
const { one:uno } = person.address.colors;
console.log(address)
console.log(address.area)
console.log(uno)
