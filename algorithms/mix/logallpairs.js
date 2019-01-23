const boxes = [1,2,3,4,5];
const names = ['aleks', 'boris', 'lina', 'tina', 'mike', 'aleksandra']

function logAllPairs(arr) {
    for(let i = 0; i< arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log(arr[i],arr[j])
        }
    }
}

logAllPairs(boxes)
logAllPairs(names)

// nested loops !!!
//0(n * n)
//0(n^2) - Quadratic time