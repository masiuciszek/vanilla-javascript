
class Animal {
    constructor(name){
        this.name = name;
        this.belly = [];
        this.energy = 100;
    }
    eat(food){
       this.belly.push(food)
       return this.belly;
    }
    active(){
        return this.energy -= 20;
    }
}

const korek = new Animal('Korek');

console.log(korek);
console.log(korek.eat('burger'));
console.log(korek.eat('pizza'));
console.log(korek.eat('and some dog food'));
console.log(korek.active());
console.log(korek.active());
console.log(korek.active());


class Person extends Animal {
    constructor(name,age){
        super(name);
        this.age = age;
    }
}

const aleks = new Person('Aleks',23);
console.log(aleks);
console.log(aleks.eat('pasta'));
console.log(aleks.eat('risotto'));
console.log(aleks.active());
console.log(aleks.active());
console.log(aleks.active());

