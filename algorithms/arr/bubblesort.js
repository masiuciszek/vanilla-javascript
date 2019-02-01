let arr = [20,40,2,15,12,30,16,100,-2,-1,500,220];


const bubblesSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log(bubblesSort(arr));

const bubblesSor2 = (arr) => {
    let swapped;
    do {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr
}

console.log(bubblesSor2(arr));