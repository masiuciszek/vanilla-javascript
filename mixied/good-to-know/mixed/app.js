function sumOddNumbers(numbers){

   }


//    console.log(sumOddNumbers([15, -5, 10]));



   const sumOddNums = (numbers) => {
    let sum = 0;
    numbers.forEach(num => {
        if(num % 2 !== 0) {
            sum += num;
        }
    });
    return sum;
   }

   console.log(sumOddNums([1,2,3,4,5]))





//    let sum = 0;
// numbers.forEach(number => {
// if (number % 2 !== 0){
// sum += number;
// }
// })
// return sum;


function powit(num = 0){
    return Math.pow(num,num);
}

console.log(powit(3))
console.log(powit(4))
console.log(powit(5))
