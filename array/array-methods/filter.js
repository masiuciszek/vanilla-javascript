// check to see if there is any duplicates
const fruits = ['apples','bananas','avocados','pears','apples','pears'];
fruits.filter((item,index) => {
    console.log(
        item ,
        index,
        fruits.indexOf(item),
        fruits.indexOf(item) === index,
    );
    return fruits.indexOf(item) === index;
});

