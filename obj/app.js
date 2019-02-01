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
  // console.log(checkInventory(foods2,"apples"));



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

  // console.log(isEveryoneHere(users));

  const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
  };

  for (const prop in apple) {
    const value = apple[prop];
    // console.log(value, prop);
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



// console.log(line2);


let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};



function countOnline(obj) {
  let result = 0;
  for(char in obj) {
    if(obj[char].online === true) {
      result += 1;
    }
  }
  return result
}

// console.log(countOnline(users2));


const snickers = {
  name: 'snickers',
  age: 4
}

function increaseAge(obj){
  obj.age = obj.age+1;
  return obj;
}

// console.log(increaseAge(snickers))


const getFullName = person => {
  const {first_name} = person
  const {last_name} = person.parents.father;
  const {last_name:mom} = person.parents.mother
  return `${first_name} ${last_name} ${mom}`
}


const person = {
  first_name: "Jennifer",
  grades: [10, 6, 14, 3, 18],
  age: 17,
  parents: {
      father: {
          last_name: "Doe"
      },
      mother: {
          last_name: "Doe"
      }
  }
};


const getNumberOfTestsTaken = grades => {
  return grades.length
};

const sumOfGrades = (grades) => {
  let grade1 = grades[0]['grade'];
  let grade2 = grades[1]['grade'];

  return grade1 + grade2;
}
const sumOfGrades2 = (grades) => {
  let total = 0;
  for(let i = 0; i < grades.length; i++) {
    total += grades[i].grade;
  }
  return total;

}


const difference = (grades) => {
  return grades.reduce((a,b) => b.grade + a.grade) / grades.length;
}
const getAverageAge = users => {
  let total = 0;
  for(let i = 0; i < users.length; i++) {
      total += users[i].age / users.length
  }
  return total;

};

//sample usage
const grades = [{
  date: "2018-12-13",
  grade: 14
}, {
  date: "2018-12-15",
  grade: 18
}]
// console.log(getNumberOfTestsTaken(grades));

//sample usage
const users3 = [{
  joined_on: "2018-12-13",
  age: 14
}, {
  joined_on: "2018-12-15",
  age: 18
}]
console.log(getAverageAge(users3));

// console.log(sumOfGrades(grades));
// console.log(sumOfGrades2(grades));
console.log(difference(grades));
