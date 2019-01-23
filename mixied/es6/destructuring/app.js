
const dog = {
    name : 'pysia',
    age: 12,
    breed: 'Sznauzer',
    colour: 'black'
}
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
    inOneWeek: 77,
  };

  const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

const {line1, line2} = user.personalInfo.address;

// console.log(line1)
// console.log(line2)

const { name:hector , age } = dog;

const {today , tomorrow , inOneWeek:nextWeek } = AVG_TEMPERATURES;


// console.log(age);
// console.log(hector);

// console.log(today, tomorrow , nextWeek)

// for(let a in dog) {
//     dog[age] = 15;
//     console.log(dog[age])
// }



// setting out own values
let a, b, rest;
[a, b] = [10, 20];


let firstName, secondName, age2;
    [firstName,secondName,age2] = ['aleks', 'smith', 24];

console.log(a);
console.log(b);
console.log(firstName);
console.log(secondName);
console.log(age);


