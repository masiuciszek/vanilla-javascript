function sliceArray(anim, beginSlice, endSlice) {

    return anim.slice(beginSlice, endSlice);

  }
  let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  console.log(sliceArray(inputAnim, 1, 3));


//   Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

// sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4) should return ["Dog", "Tiger", "Zebra"].


function nonMutatingSplice(cities) {
    // Add your code below this line
    return cities.slice(0,3)

    // Add your code above this line
  }
  let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));


//   Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
// Do not mutate the original array provided to the function.