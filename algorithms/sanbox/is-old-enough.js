function isOldEnoughToDrink(age) {
   if(age > 21) {
       return true
   }
   return false;
  }

  console.log(isOldEnoughToDrink(25))
  console.log(isOldEnoughToDrink(15))

  function isOldEnoughToDrink2(age) {

    return age >= 21 ? true : false;

   }

   console.log(isOldEnoughToDrink2(25))
   console.log(isOldEnoughToDrink2(15))


   function isOldEnoughToDrink3(arr) {

    return arr.some(a => a >= 21);

   }


   console.log(isOldEnoughToDrink3([1,2,10,4,7]));
   console.log(isOldEnoughToDrink3([30,2,10,19]));

   function isOldEnoughToDrink4(arr) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 21) {
            return true
        }
      }
    return false;
   }


   console.log(isOldEnoughToDrink4([1,2,10,4,7]));
   console.log(isOldEnoughToDrink4([30,2,10,19]));