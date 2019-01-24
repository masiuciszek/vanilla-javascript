// shoul return 10
function sumOfTen(arr) {
    // change code below this line
    let myArr = arr.splice(1,2);
    // change code above this line
    return myArr.reduce((a, b) => a + b);
  }

  // do not change code below this line
  // console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


  function htmlColorNames(arr) {
    // change code below this line
    let newArr = arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    // change code above this line
    return newArr;
  }

  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));



  function forecast(arr) {
    // change code below this line

    return arr.slice(2,4);
  }

  // do not change code below this line
  // console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // change code below this line
      newArr.push([...arr]);
      // change code above this line
      num--;
    }
    return newArr;
  }

  // console.log(copyMachine([true, false, true], 2));
  // console.log(copyMachine(['hello',true,false], 3));
  // console.log(copyMachine(['legia','warsza,','cwks'], 4));




function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is' ,'fun'];
  return sentence;
}


console.log(spreadOut());

function spread(arr1,arr2) {
  let myArr = [...arr1, ...arr2];
  return myArr;
}

console.log(spread(['legai' , 'Warszawa'], ['Cwks', 1916]));


function quickCheck(arr, elem) {

    return arr.indexOf(elem)  >= 0 ? true : false;
}


// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));


function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) === -1); {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
  // change code above this line
];

console.log(myNestedArray)

