

const names1 = ['aleks', 'boris', 'moris', 'tina']
const names2 = ['mia','peter','jon','boris']
const names3 = ['stickan','moris','bartek','jon']
const names4 = ['stina','liam','tim','bartek']
const names5 = ['sofie','lisa',]
const names6 = ['moa','roman']

// time - O(a*b) - O(n^2)
function IsCommon(arr1,arr2) {
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false;
}

// console.log(IsCommon(names1,names2))
// console.log(IsCommon(names2,names3))
// console.log(IsCommon(names2,names4))
// console.log(IsCommon(names1,names4))


// how we can write this code in a better way

/*arr1 ==> obj {
    a:true
    b:true
    c:true
    x:true
}
array2[index] === obj.properites
*/

//  time - o(a+b)  o(n)
function containsCommon(arr1,arr2) {
    // loop through first array and create an object
    //where props === items in an array
    let map = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array
    // exists on created object
    for(let j = 0; j  < arr2.length; j++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

// console.log(containsCommon(names1,names2));
// console.log(containsCommon(names1,names3));
// console.log(containsCommon(names3,names4));
// console.log(containsCommon(names5,names6));
// console.log(containsCommon(names1,names6));

function containsCommon2(arr1,arr2) {
    return arr1.some(item => arr2.includes(item));
}

// console.log(containsCommon2(names1,names6))
// console.log(containsCommon2(names1,names3))
// console.log(containsCommon2(names2,names4))
// console.log(containsCommon2(names1,names2))
// console.log(containsCommon2(names3,names2))


function test(arr1,arr2) {
    let map = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }
    for(let j = 0; j < arr2.length; j++) {
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}


console.log(test(names1,names2));
console.log(test(names1,names6));
