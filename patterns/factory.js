
const SimpleMemberShip = function(name){
    this.name = name;
    this.cost = '100';
}

const StandardMemberShip = function(name){
    this.name = name;
    this.cost = '250';
}

const SuperMemberShip = function(name){
    this.name = name;
    this.cost = '500';
}

function memberFactory() {
    this.crateMember = function(name, type) {
        let member;

        if(type === 'simple'){
            member = new SimpleMemberShip(name);
        } else if(type === 'standard') {
            member = new StandardMemberShip(name)
        } else if(type === 'super'){
            member = new SuperMemberShip(name);
        }
        member.type = type;

        member.define = function() {
            console.log(`${this.name} ${this.type} : ${this.cost}`)
        }
        return member;
    }
}

const members = [];
const factory = new memberFactory();

members.push(factory.crateMember('masiu', 'super'));
members.push(factory.crateMember('boris', 'simple'));
members.push(factory.crateMember('Tina', 'standard'));

console.log(members);
console.log(members)

members.forEach(function(member) {
    member.define();
})

for(let i = 0; i < members.length; i++){
    members[i].define();
}