const canVote = person => {

    const { age} = person;
    return age >= 18 ? true : false;

}


const person = {
    name: "Jad",
    age: 26
};
console.log(canVote(person));