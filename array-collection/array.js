
//map,sets  and weekmaps/sets
// let employwee1 = {name: 'Jake'};
// let employwee2 = {name: 'Tina'};

// // let employes = new Map();
// // employes.set(employwee1, 'one');
// // employes.set(employwee2, 'two');

// // console.log(employes.size);
// // console.log(employes.get(employwee1));

// let employes = new WeakMap([
//     [employwee1, 'abc'],
//     [employwee2, '123']
// ]);

// console.log(employes);

// let cars = new Set();

// cars.add('bmw');
// cars.add('ferrari');
// cars.add('bwm');

// console.log(cars.size);

// let dogs = new Set([
//     'colly',
//     '10 pudels',
//     '100 mini snahuzers'
// ]);

// let newDogs = new Set(dogs);
// console.log(newDogs.size);
// console.log(dogs.has('colly'));
// console.log(dogs.has('pudel'));


// let perks = new Set(['cat', 'jet']);

// console.log(...perks.values());
// console.log(...perks.keys());
// console.log(...perks.entries());


//weakset

// let colours = new WeakSet([1,2,3]);

//Subclassing

// class Animals extends Array {

// }


// let a = Animals.from([5,10,15]);
// let newarr = a.reverse();
// console.log(a instanceof Animals);
// console.log(a.length);
// console.log(newarr.length);

class Nums extends Array {
    sum(){
        let total = 0;
        this.map(x => total += x);
        return total;
    }
}


let myArr = Nums.from([5,10,20]);
console.log(myArr.sum());


class CashMoney extends Array {
    add(){
        let sum = 100;
        this.map(x => sum += x );
        return sum;
    }
}


class Syffry extends Array {
    suma(){
        let total = 0;
        this.map(x => total += x);
        return total
    }
}

let mojeSyffry = Syffry.from([5,5,5]);
console.log('moje syffry ',mojeSyffry.suma());

let numbers = CashMoney.from([1,2,3]);
console.log(numbers.add());

class MovieList extends Array{
    constructor(movie,...items){
        super(...items);
        this.movie = movie;
    }
    addMovie(movie){
        return this.push(movie);
    }
    rankMovies(...limit){
        return this.sort((a,b) => (a.stars > b.stars ? -1 : 1)).slice(0,limit);
    }
}


const movieList = new MovieList('masiu\s best movies',

        {name: 'harry potter', stars: 10},
        {name: 'the town', stars: 7},
        {name: 'lord of the rings', stars: 8},
        {name: 'toy story', stars: 9},
);


movieList.addMovie( {name: 'die hard', stars: 7.5 } );

console.log(movieList);
console.log(movieList.rankMovies(10));