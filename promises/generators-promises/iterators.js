let ids = [9000, 9001, 9002];

let its = ids[Symbol.iterator]();
// console.log(typeof ids[Symbol.iterator]);

console.log(its.next())//false
its.next();
its.next();
console.log(its.next()); // true

let idMaker = {
    [Symbol.iterator](){
        let nextId = 100;
        return {
            next() {
                return {
                    val: nextId++,
                    done: false
                };
            }
        }
    }
}
let it = idMaker[Symbol.iterator]();
console.log(it.next().val);
console.log(it.next().val);

let idMaker2 = {
    [Symbol.iterator](){
        let nextId = 100;
        return {
            next() {
              let val = nextId > 102 ? undefined : nextId ++;
              let done = !val;
              return { val: done };
            }
        }
    }
}
// // for(let val of idMaker2){
// //     console.log(val); // don't use it!!!!
// }

let nums = [1,2,3];
function process(id1, id2, id3){
    console.log(id3);
}

process(...nums);