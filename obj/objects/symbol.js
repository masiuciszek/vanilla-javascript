let eventSymbol = Symbol('symbol 1');

console.log(eventSymbol.toString());

const important = Symbol('importatn');
console.log(important.toString());

let s = Symbol('event');
let s2 = Symbol('event')

console.log(s === s2); // false


let sym = Symbol.for('event');
let sym2 = Symbol.for('event')

console.log(sym === sym2); // true

let symTest = Symbol.for('symbol');
let output = Symbol.keyFor(symTest);
console.log(output);

// well known symbols

let Blog = function(){

}
Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();

console.log( blog.toStringTag);

let values = [8 ,12 ,16];

// values[Symbol.isConcatSpreadable] = false;
// console.log([].concat(values));

values[Symbol.toPrimitive] = function(hint){
    console.log(hint);
    return 42;
}
let sum = values + 100;
console.log(sum);