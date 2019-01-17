let originString = 'helloT';

let trimedString = originString.substring(0, originString.length -1);
console.log(trimedString);

let string = 'happyLL';

let trimedString2 = string.substring(0, string.length -2)
console.log(trimedString2);


function removeLastCharStr(str){
    return str.substring(0, str.length -1);
}
console.log(removeLastCharStr('alekss'))
