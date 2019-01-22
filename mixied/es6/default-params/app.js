
const increment = (function() {
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6


  function clalcBill(food = 50,service = 25,tip=10){
      const billnote = food + (service + tip * 2) / 0.66 ;
      return billnote.toFixed(2);
  }

  console.log(clalcBill(100))
  console.log(clalcBill())
  console.log(clalcBill(20,100,45))