


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


const double = (arr) => {
    return arr.map(val => val + val);
}

console.log(double([5,5,10]))
console.log(double([5,5,40]));

