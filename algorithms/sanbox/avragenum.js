const getAverageAge = users => {

   for(let i = 0; i < users.length; i++) {
       return users[0].age + users[1].age / users[i].age
   }
};

const users = [{
    joined_on: "2018-12-13",
    age: 14
}, {
    joined_on: "2018-12-15",
    age: 18
}]
console.log(getAverageAge(users));

