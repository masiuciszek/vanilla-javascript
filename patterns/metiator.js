const User = function(name){
    this.name = name;
    this.chatRoom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatRoom.send(message, this, to)
    },
    recive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const ChatRoom = function() {
    let users = {}; // list of users

    return {
        register: function(user){
            // as a key , user.name
            users[user.name] = user;
            user.chatRoom = this;
        },
        send: function(message, from , to) {
            if(to) {
                to.recive(message, from)
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recive(message,from)
                    }
                }
            }
        }
    }
}
const tim = new User('Tim')
const arek = new User('Arek')
const jenny = new User('Jenny')

const chatRoom = new ChatRoom();

chatRoom.register(tim);
chatRoom.register(arek);
chatRoom.register(jenny);

tim.send('hello', jenny);
arek.recive('hello', tim);
tim.send('hellloo everyobode');
