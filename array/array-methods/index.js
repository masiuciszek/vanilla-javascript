const splitStringIntoChars = string => {
   return string.split(' ');
}


// console.log(splitStringIntoChars("Hello World!"));



const getLatLng = location => {
    //destructure into 2 variables: lat & lng
    const [lat, lng] = location;
    return `The latitude is ${lat} and the longitude is ${lng}`;
}
const location = [24.235235, 2.5734];
// console.log(getLatLng(location));


const getVotingMessage = person => {
    //"You can't vote yet";
    //"Your first vote";
    //"You have already voted";
    if(person.age < 18) {
        return 'you can\'t vote yet';
    } else if(person.age === 18) {
        return 'your first vote';
    } else if (person.age > 18) {
        return "You have already voted";
    }
    return person.age
}

//sample usage
const person = {
    name: "John",
    age: 14
}
// console.log(getVotingMessage(person));

let numbers = [1,3,20,8,5,-3,-7,4,-2,9];

