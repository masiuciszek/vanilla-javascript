function reverseStr(str) {
    let revereStr = '';
    for(let i = str.length -1; i >= 0; i--) {
        revereStr += str[i];
    }
    return revereStr
}

console.log(reverseStr('hello'));


function revereStr2(str) {
    return str.split('').reverse().join('');
}

console.log(revereStr2('hello'))


function reverseStr3(str){
    let reversed = '';
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseStr3('hello'))


function reverseStr4(str) {

    return [...str].reverse().join('')
}

console.log(reverseStr4('hello'));


function reverseStr5(str) {

    return Array.from(str).reverse().join('')
}

console.log(reverseStr5('hello'));


function revereStr6(str) {
    return str.split('').reduce((char,word) => word + char, '');
}

console.log(revereStr6('hello'));

// recuersion !!!
function revereStr7(str) {
    if(str === '') {
        return str;
    } else {
        return revereStr7(str.substr(1)) + str[0];
    }
}

console.log(revereStr7('hello'));


// recursion 8
function reverseStr8(str) {
    return str ? reverseStr8(str.substr(1)) + str[0] : str;
}

console.log(reverseStr8('hello'))

let myarr = ['hello','apples','bananas'];
let word = 'peter';

console.log(word.split(','));
console.log(myarr)