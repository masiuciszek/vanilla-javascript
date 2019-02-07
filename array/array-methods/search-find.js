

const shouldAdjustGrades = grades => {

    return grades.some(a => a > 10)
}

// console.log(shouldAdjustGrades([10, 12, 10, 14]));


const shouldCancelExam = grades => {
    return grades.every(grade => grade >= 18)
}


// console.log(shouldCancelExam([10, 12, 10, 14]));


const verifyUser = (users, id) => {

    for (let i = 0; i < users.length; i++) {
        if(users[i].id === 2) {
            console.log(users[i].is_verified);
            return users[i].is_verified = true;
        }
    }
}



const users = [{
    id: 1,
    name: "John",
    is_verified: false
}, {
    id: 2,
    name: "Jennifer",
    is_verified: false
}, {
    id: 3,
    name: "Bob",
    is_verified: false
}];
console.log(verifyUser(users, 2));

