let arr1 = [1,2,3,4,5,6,1];
let arr2 = [1,2,3,4,5,2,6,7,8,9];
let arr3 = [2];

function findSameNum (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i +1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined
}

console.log(findSameNum(arr1));
console.log(findSameNum(arr2));
console.log(findSameNum(arr3));

const findSameNum2 = (arr) => {
    let map = {};
    for(let i = 0; i < arr.length; i++) {
        if(map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined
}

console.log(findSameNum2(arr1));
console.log(findSameNum2(arr2));
console.log(findSameNum2(arr3));


