class User{

    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    getFullName(){
        return `${this.first_name} ${this.last_name}`;
    }

    canVote(){
    return this.age > 18 ? true : false;
    }
    getVotingMessage(){
        if(this.canVote() === true) {
            return "You can vote";
        } else {
          return  "You can't vote";
        }
    }
}

//sample usage
const jennifer = new User("Jennifer", "Doe", 20);
console.log(jennifer.getFullName());
console.log(jennifer.canVote());
console.log(jennifer.getVotingMessage());
