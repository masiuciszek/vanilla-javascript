let users = {
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


  function checkObj(obj) {
      let user = 0;
      for(let char in obj) {
          if(obj[char].age >= 21) {
              user +=1;
          }
      }
      return user
  }

//   console.log(checkObj(users));


let people = {
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

  let namesArr = Object.keys(people)
        .filter(letter => letter.charAt(0) === 'R')
        .map(cap => cap.toUpperCase());


//   console.log(namesArr);

  function getArrayOfUsers(obj) {
    return Object.keys(obj)
  }

//   console.log(getArrayOfUsers(people));


let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };

  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;

  }

  console.log(addFriend(user, 'Pete'));