let money = 100;

while(money) {
    console.log(money);
    money--;
}

const arr = [ 1,2,3,4,4,4,4,4];

let newArr = [...new Set(arr)];
console.log(newArr)