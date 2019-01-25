class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }
    // getter
    get activity(){
        const today = new Date();
        const hour = today.getHours();

        if(hour > 8 && hour <= 20){
            return ' yeaah we can play';
        } else {
            return ' zzzZZZzzz';
        }
    }
    set owner(owner){
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }
    speak(){
        return `${this.sound} my I am a  ${this.animal}`
    }
}


class Owner {
    constructor(name, adress){
        this.name = name;
        this.adress = adress;
    }
    set phone(phone){
        const phoneFix = phone.replace(/[^0-9]/g, '');
        this._phone = phoneFix;
    }

    get phone(){
        return this._phone;
    }
}

const arnie = new Pet('dog', 2, 'pug', 'woof woof');
const tipppy = new Pet('rabbit', 4, 'white one', 'bruuu ');

arnie.owner = new Owner('Aleks', '123-main street');
// arnie.owner.phone = '(555) 323-3233';


console.log(arnie);



