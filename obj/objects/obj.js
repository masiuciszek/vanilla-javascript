// let a = {a: 1} , b = {b:2};

// let target = {};
// Object.assign(target, a ,b);
// console.log(target);


let a = {a:1} , b = {a: 10, b: 5};

let target= {};
Object.assign(target, a , b)
console.log(target);

let amount = NaN;
console.log(Object.is(amount, amount));


const mergeOptions = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

//add 2 object together

const webDeveloper = {
    name: 'marcell',
    age: 23,
    skills: 'web development'
};

const programinLanguages = {
    languages: ['javascript','php','python']
}


console.log(mergeOptions(webDeveloper, programinLanguages));


