const dogs = ['hector', 'snickers', 'victor','hugo','hugo','snickers'];

// Set
// const withSet = [...new Set(dogs)];

//filter
const withFilter = dogs.filter((item,index) => dogs.indexOf(item) === index);

//reduce
const withReduce = dogs.reduce((special,item) => {
    special.includes(item) ? special : [...special,item]
}, []);



// console.log(withSet);
console.log(withFilter);
console.log(withReduce);