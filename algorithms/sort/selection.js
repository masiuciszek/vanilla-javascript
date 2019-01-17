const selectionSort = arr => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
};

console.log(selectionSort([55,4,3,33,2,221,1,7,8]));