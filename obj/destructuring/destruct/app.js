const getTotalOfGrades = student => {

    const {grades} = student;
    let total = 0;
    for (let i = 0 ; i < grades.length; i++) {
        total+= grades[i];
    }
    return total;
}



const getTotalOfGrades2 = student => {

    let gradesOfStudent = student.grades;
    return gradesOfStudent.reduce((a,b) => a + b , 0);

}

const student = {
    name: "Jennifer",
    grades: [10, 6, 14, 3, 18],
    age: 17
};


console.log(getTotalOfGrades(student));
console.log(getTotalOfGrades2(student));



const getFullName = person => {
    return ;
}

//sample usage
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
console.log(getFullName(person));