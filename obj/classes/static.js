class User{

    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    static getVotingAge(){
        return 18;
    }

    canVote(){
       if(this.age >= User.getVotingAge()) return true;
       else return false;
    }
}


const jennifer = new User("Jennifer", "Doe", 20);
const boris = new User("Boris", "Doe", 10);
console.log(User.getVotingAge());
console.log(jennifer.canVote());
console.log(boris.canVote());


console.log(typeof(User));