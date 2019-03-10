const verifyUser = (users, id) => {
    return users.find(user => {
        if(user.id === id){
            user.id = is_verified;
        }
    })
}


//sample usage
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
