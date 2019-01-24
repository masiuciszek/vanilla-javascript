

function *process(){
    let result = yield;
    console.log(`result is ${result}`);
}

let it = process();
it.next();
it.next(200);

function *yieldArr(){
    let myArr = [yield,yield,yield];
    console.log(myArr[2]);
}

let a = yieldArr();
a.next();
a.next(11);
a.next(22);
a.next(60)


//itterator delegation

function *test(){
    yield 10;
    yield* [1,2,3];
}

let print = test();

console.log(print.next().value);
console.log(print.next().value);
console.log(print.next().value);
console.log(print.next().value);