//Sets are unique

const set1 = new Set();

//add values to set
set1.add(100);
set1.add('a string');
set1.add({name: 'aleks'});
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, 'string']);

// console.log(set2);
// console.log(set1);

// console.log(set1.size);
// console.log(set1.has(60+60));
// console.log(set1.has(50+50));


// delete from the set
// set1.delete(100);

//loop therough the set
for(let item of set1){
    console.log(item);
}

for(let item of set1.keys()){
    console.log(' for of keys: ',item);
}

for(let i = 0; i < set1.entries(); i++){
    console.log('dor loop :', set1[i])
}

set1.forEach(val => {
    console.log('foreach : ', val);
});

// convert into an array
const setArr = Array.from(set1);
console.log(setArr);