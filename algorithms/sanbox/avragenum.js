
const getAverageAge2 = users => {
    let avrageAge = users.reduce((a,b) => a.age + b.age) / users.length;
    return avrageAge;
};
const getAverageAge3 = users => {
    let total = 0;
      users.forEach(user => {
       return  total += user.age;
    });
    return total / users.length;
};

const users = [{
    joined_on: "2018-12-13",
    age: 14
}, {
    joined_on: "2018-12-15",
    age: 18
}]
console.log(getAverageAge(users));
console.log(getAverageAge2(users));
console.log(getAverageAge3(users));

