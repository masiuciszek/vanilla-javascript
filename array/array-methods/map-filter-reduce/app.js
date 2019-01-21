// filter , reduce , map

const fruits = ['apples','bananas','grapes', 'mango', 'berries', 'jackfruit']

const nums = [ 4,5,6,3,4,22,10,8,9];
const ages = ['5','10','20','50'];
const peopleAge = ['5','10','20','50','20','45','60'];

const fruitCap = fruits.map(cap => cap[0].toUpperCase());
const filterFruits = fruits.filter(fruit => fruit.length > 6);
const sumNums = nums.reduce((cur,acc) => cur + acc , 0);
const strToNums = ages.map(age => parseInt(age));

// console.log(fruitCap);
// console.log(filterFruits);
// console.log(sumNums);
// console.log(strToNums);

    // COMBINE MAP ,FILTER REDUCE

    const newPeopleAge = peopleAge.map(ages => parseInt(ages))
        .filter(age => age >= 30)
            .reduce((age,sum) => age + sum, 0);
        console.log(newPeopleAge);
