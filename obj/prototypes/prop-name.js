let fruit = 'banana';
let fruit2 = 'jackfruit';

// old way, 2 steps
let fruitBasket = {};
fruitBasket[fruit] = 'bananas'

console.log(fruitBasket);

// ES6
let fruitBasketEs6 = {
    [fruit2]: 'jackfruits'
};

console.log(fruitBasketEs6);


