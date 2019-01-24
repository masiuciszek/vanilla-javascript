function *process(){
    yield 1;
    yield 2;
    yield 3;
}

let it = process();
console.log(it.next().value);
console.log(it.throw('this thing'));
console.log(it.next()); // never executes

