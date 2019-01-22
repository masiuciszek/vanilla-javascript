let magic = () => {
    return new Date();
  };

  console.log(magic());


const myConcat = (arr1, arr2) =>  {
    "use strict";
    return arr1.concat(arr2);
  };

  console.log(myConcat([1, 2], [3, 4, 5]));


  const myConcat2 = ((arr1,arr2) => {
      return [...arr1, ...arr2];
  })
  console.log(myConcat2([1, 2], [3, 4, 5]));


  const myConcat3 = ((arr1,arr2) => [...arr1, ...arr2]);
  console.log(myConcat3([1,2],[3,4,5]));


  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
  const squareList = (arr) => {
    const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt(num) === 0 ).map( (num) => Math.pow(num, 2) );
    return squaredIntegers;
  };

  // test your code
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);