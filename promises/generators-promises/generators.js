function *gen(){
    yield 1;
    yield 2;
}

let print = gen();
console.log(print.next());
print.next();
console.log(print.next());

function *process(){
    let nextNum = 100;
    while(true)
        yield (nextNum++);

}

let print2 = process();
print2.next();
print2.next();
print2.next();
print2.next();
print2.next();
console.log(print2.next().value)

function *myLoop(){
    let i = 0 ;
    while(true)
        yield(i++);
}

let test = myLoop();
test.next();
test.next();
test.next();
test.next();
test.next();
console.log(test.next().value);


function *myForOfLoop(){
    let nextId = 500;
    while(true)
        yield(nextId++);
}
for(let id of myForOfLoop()){
    if(id > 510) break;
    console.log(id);
}