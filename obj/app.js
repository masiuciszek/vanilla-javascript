let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };

  // change code below this line
    foods['bananas'] = 13;
    foods['grapes'] = 35;
    foods['strawberris'] = 27;
  // change code above this line

//   console.log(foods);


  let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };

  userActivity.data['online'] = 10;
  const { online } = userActivity.data;
//   console.log(userActivity);
//   console.log(online);


  let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };

  function checkInventory(obj,scannedItem) {

    return obj[scannedItem];
  }

  // change code below this line to test different cases:
  console.log(checkInventory(foods2,"apples"));



  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };



  function isEveryoneHere(obj) {
    // change code below this line
      if(users.hasOwnProperty('Alan','Jeff','Sarah', 'Ryan')){
          return true
      }
      return false;
    // change code above this line
  }

  console.log(isEveryoneHere(users));

  const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
  };

  for (const prop in apple) {
    const value = apple[prop];
    console.log(value, prop);
  }


  const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

const {line2} = user.personalInfo.address


console.log(line2);