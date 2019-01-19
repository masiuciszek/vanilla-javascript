//  old way of creating an object
const Person = function(name,secondname,age, city) {
    this.name = name;
    this.secondname = secondname;
    this.age = age;
    this.city = city;
}

Person.prototype.hello = function() {
    return `hello my name i ${this.name}${this.secondname} and I am ${this.age} years old and comes from ${this.city}`;
}

Person.prototype.getMarried = function(newName) {
    return `just got married and now my new name is ${this.name}${newName}`
}

const maria = new Person('Maria',' Jonsson', 34, 'New York');

console.log(maria);
console.log(maria.hello());
console.log(maria.getMarried(' smith'));


// New Way , classes in es6

class Person2 {
    constructor(name,secondname,age,city) {
        this.name = name;
        this.secondname = secondname;
        this.age = age;
        this.city = city;
    }
    greeting(){
        return `hello my name i ${this.name}${this.secondname} and I am ${this.age} years old and comes from ${this.city}`;

    }
    getMarried(newName){
        return `just got married and now my new name is ${this.name}${newName}`
    }

}

const tina = new Person2('Tina',' Robinson',22,'LA');
console.log(tina);
console.log(tina.greeting());
console.log(tina.getMarried(' Tyson'));

