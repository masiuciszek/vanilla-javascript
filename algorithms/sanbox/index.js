function printAllPairs(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}
// printAllPairs(5);

// O(n)
function countUpandDown(n){
    console.log('going up!!');
    for(let i = 0; i < n; i++){
        console.log(i);
    }
    console.log('At the top and no we going down!!!');
    for(let j = n -1; j >= 0; j--){
        console.log(j);
    }
    console.log('Back down again');
}

// countUpandDown(10);


function test(n){
for (let i = 0; i < n; i++){
    for(let j=0; j < n; j++){
        console.log(i,j);
    }
  }
}

test(4);


function reverse(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
// console.log(reverse('hesjan'))

function countChar(str) {
    let result = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(result[char] > 0){
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

// console.log(countChar('masiu boooooi'))