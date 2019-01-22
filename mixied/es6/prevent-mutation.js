// prevent mutation using freeze
function freezeObj() {
    const myPi = {
        pi: 3.14
    }
    Object.freeze(myPi); // now we can't mutate the value insde the scope!
    try {
        myPi.pi = 45;
    } catch (error) {
        console.log(error)
    }
    return myPi.pi;
}

console.log(freezeObj());