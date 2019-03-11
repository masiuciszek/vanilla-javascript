const getUsersFullNames = users => {

    let fullName = users.map(user => user.first_name + ' ' +user.last_name).join(', ');

    return users.id = fullName;
}

const users = [{
   id: 1,
   first_name: "John",
   last_name: "Doe",
   is_verified: false
}, {
   id: 2,
   first_name: "Jennifer",
   last_name: "Doe",
   is_verified: true
}];
// console.log(getUsersFullNames(users));

const sumGrades = grades => {
    let result = grades.reduce((a,b) => a + b , 0);
    return result;
}


//sample usage
console.log(sumGrades([10, 12, 10, 14]));
