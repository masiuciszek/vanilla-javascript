let nemo = ['nemo']

let names = ['nemo','lina','boris']


function findNemo(arr) {
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i]==='nemo') {
            return 'found nemo!!'
        }
    }
}

// console.log(findNemo(names));

const findNemo2 = array =>  {
   array.forEach(fish => {
       if (fish === 'nemo') {
           console.log('we found nemo')
       }
   })
}
// findNemo2(names);

const findNemo3 = myarray => {
   for ( let fish of myarray) {
        if(fish === 'nemo') {
            console.log('yes we found nemo')
        }
    }
}

findNemo3(names);

const reverse = str => {
    let reversed = '';
    for(let char of str) {
        reversed = char + reversed
    }
    return reversed
}

console.log(reverse('hello'))
