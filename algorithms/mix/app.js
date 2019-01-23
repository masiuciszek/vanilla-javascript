function print(numbers){
    console.log('these are the numbers');
    numbers.forEach(num => {
        console.log(num);
    })

    console.log('and these are the sums')
    numbers.forEach(firstNum => {
        numbers.forEach(secondNum => {
            console.log(firstNum + secondNum)
        })
    })
}

console.log(print([1,2,3,4,5]));


function print2(nums) {
    nums.forEach(function(num) {
        console.log(num)
    })
    nums.forEach(function(firstNum) {
        nums.forEach(function(secondNum) {
            console.log(firstNum + secondNum)
        })
    })
}

// console.log(print2([1,2,3,4,5,6,7,8,]))