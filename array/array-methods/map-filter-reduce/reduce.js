const cash = [500.5,200.46,150.23,600.44,250.29];

const avrageAmount = cash.reduce((total,ammount,i, array) => {
    total += ammount;
    if(i === array.length -1) {
       return total / array.length
    } else {
        return total
    }
}, 0);

// console.log(avrageAmount);

const avrageAmount2 = cash.reduce((total,ammount,i,array) => {
    total += ammount
    return total / array.length
}, 0);

// console.log(avrageAmount2);

const double = cash.reduce((total, ammount) => {
    total.push(ammount * 2);
    return total;
}, [])

// console.log(double);

const above250 = cash.reduce((total,ammount) => {
    if(ammount >= 250) {
        total.push(ammount);
    }
    return total;
}, []);

// console.log(above250);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const checkFruit = fruitBasket.reduce((tally,fruit) => {
    tally[fruit] = (tally[fruit] || 0) +1;
    return tally
}, {})

// console.log(checkFruit);

const checkFruit2 = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = 1;
    return tally;
}, {});
// console.log(checkFruit2);

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const together = array.reduce((total ,ammount) => {
    return total.concat(ammount)
}, []);

// console.log(together);

const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']},
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ];

  const colours = data.reduce((total,ammount) => {
      ammount.c.forEach(colour => {
          total.push(colour);
      })
      return total;
  }, []);

//   console.log(colours);

  const uniqueColurs = data.reduce((total,ammount) => {
      ammount.c.forEach(colour => {
          if(total.indexOf(colour) === -1) {
              total.push(colour);
          };
      });
      return total;
  }, []);

//   console.log(uniqueColurs);


var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];

  const totalYears = pilots.reduce((total,pilot) => {
      return total + pilot.years;
  },0);

