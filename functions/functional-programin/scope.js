// never change the global variable

var fixedValue = 4;

function incrementer () {

  let increacseVal = fixedValue;
  return increacseVal++


}

var newValue = incrementer();
console.log(newValue)// Should equal 5
console.log(fixedValue); // Should print 4

let number = 5

const increaseNum = (num) => {
    return num += 1;
}

let increaseNumberByOne = increaseNum(number);
console.log(increaseNumberByOne);



var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];



function add (arr,bookName) {

   let newarr = [...arr];
  newarr.push(bookName);
  return newarr;


}


function remove (arr,bookName) {
    let newArr = [...arr]

  if (newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1)
    return newArr;

    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);


const names = ['mia','stina','boris','masiu','karol', 'mikolai'];

const addName = (arr,name) => {
    let newArr = Array.from(arr)
    newArr.push(name)
    return newArr;
}

const removeName = (arr,name) => {
    let newArr = [...arr];
    if(newArr.indexOf(name) >= 0) {
        newArr.splice(newArr.indexOf(name),1)
        return newArr;
    }

}

let newName = addName(names, 'hector');
let deleteName = removeName(names, 'karol')

console.log(newName);
console.log(deleteName);