function printMoreThenOnce(str){

    const word =  ` ${str} hellooooo`;

    for(let i = 0; i < word.length; i += 3) {
        console.log(word)
    }
    return word
}

printMoreThenOnce('masiu')


const arr = [5,7,2];

function editConst() {
    arr[0] = 5
    arr[1] = 7
    arr[2] = 2

    console.log(arr)
}

editConst();

