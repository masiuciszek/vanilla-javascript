class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        return 'eat some food';
    }
}


class Cat extends Animal{

    meow(){
        return 'meoow!';
    }
}

const kattis = new Cat('kattis');
console.log(kattis);
console.log(kattis.eat());
console.log(kattis.meow());