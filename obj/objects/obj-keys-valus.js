const jennifer = {
    age: 18,
    first_name: "Jennifer",
    last_name: "Doe"
}

const keyArr = Object.keys(jennifer)
        .filter(key => key.length > 4)




// console.log(keyArr);

// const valueArr = Object.values(jennifer)

// console.log(valueArr);

function getObjectKeys(person){
    return Object.keys(person)
}
// console.log(getObjectKeys(jennifer));

function getDynamicKey(person, key){

      return person[key];
}

// console.log(getDynamicKey(jennifer, "age"));


