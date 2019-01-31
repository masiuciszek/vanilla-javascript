function alphabeticalOrder(arr) {

    return arr.sort((a ,b) => a > b);
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));


let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {



 return [].concat(arr).sort((a,b) => {
     return a - b;
 })



}
console.log(nonMutatingSort(globalArray));

// let word = "Hello World,I-am code"
// let split1 = word.split(' ')
// let split2 = word.split(/\W/)


// console.log(split1);
// console.log(split2);

// the global variable
// the global variable
let globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {

    return title.split(/\W/).filter(x => x !== '').join('-').toLowerCase();

}

console.log(urlSlug(globalTitle));