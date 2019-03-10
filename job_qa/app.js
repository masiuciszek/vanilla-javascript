const test = 'false';
const test2 = false
const test3 = NaN

test ? console.log('yeaahh') : console.log('booo');
test2 ? console.log('yeaahh') : console.log('booo');
test3 != test3 ? console.log('yeaahh') : console.log('booo');


const nums = [6,8,4,9,2,6];
// console.log(i)
for(var i = 0 ; i < nums.length; i++) {
    var x = i * 2;
    // console.log('hi');
}

// console.log(i);
// console.log(x);


function name() {
   console.log(this);
}

const homer = {
    sayHi: () => {
        console.log(this);
    }
}



let bar = null;
console.log(typeof bar === 'object'); // true
console.log(typeof bar !== null && typeof bar === 'object');
console.log(bar !== null && (typeof bar === 'object' ) || (typeof bar === 'function'));


(function(){
    var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'))
console.log("b defined? " + (typeof b !== 'undefined'))

var myObject = {
    foo: 'bar',
    func: function(){
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
    }
}

console.log(myObject.func());