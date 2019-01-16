// check to see if there is any duplicates
const fruits = ['apples','bananas','avocados','pears','apples','pears'];

fruits.reduce((special, item) => {
    console.log(
        item,
        special,
        special.includes(item),
        special.includes(item) ? special : [...special],
    );
    return special.includes(item) ? special : [...special];
},[]);

