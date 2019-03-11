function outer(){
    let name = 'marcell';
    function greet(){
        console.log('hello ' + name);
    }
    return greet;
}

// console.log(outer());

// let foo = outer();
// console.log(foo())

function outer2(){
    let a = 5;
     function inner() {
        let b = 10;
        console.log(a + b);
    }
    return inner;
}


// console.log(outer2())
// let bar = outer2();
// console.log(bar());


function Person(name){
    let _name = name;

    this.getName = function(){
        return _name;
    }

}

let person = new Person('Boris');
console.log(person);
console.log(person.getName());

function Dog(name){
    this.name = name

    this.greet = function(){
        return 'hello my name is ' + this.name
    }
}

let dog = new Dog('Snickers');
console.log(dog);
console.log(dog.greet());