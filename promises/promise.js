
// const order = [['sunglasses', 2], ['bags', 3]];

// const order2 = [['veggies', 10], ['nuts', 5]];

// const order3 = [['veggies', 10]];

// const handleSuccess = (resolve) => {
//     console.log(resolve);
// }

// const handleError = (reject) => {
//     console.log(reject)
// }

// checkInventory(order)
//     .then(handleSuccess)
//     .catch(handleError)

// checkGroceryStore(order2, inventory)
//     .then(handleSuccess)
//     .catch(handleError);

//     checkGroceryStore(order2, groceryStore)
//     .then(handleSuccess)
//     .catch(handleError);


//     checkGroceryStore(order3, groceryStore)
//     .then(handleSuccess)
//     .catch(handleError);

//     checkGroceryStore(order3, inventory)
//     .then(handleSuccess)
//     .catch(handleError);




const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
 const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.')

const checkPants = checkAvailability('pants','Favorite Supply Co.' )

const checkBags = checkAvailability('bags', 'Favorite Supply Co.' )

Promise.all([checkSunglasses,checkPants,checkBags])
    .then(resolve => {
        return Promise.all(resolve.map(res => console.log(res)))
    })



