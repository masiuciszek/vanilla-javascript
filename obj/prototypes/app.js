const User = function(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.cantalk = true
}

User.prototype.greet = function(){
    if(this.cantalk) return `hello I am ${this.first_name}`;
}

function getMarried(){

}

getMarried.prototype.name = User.prototype.profil;

const aleks = new User('Aleks', 'stevensson', 25);
console.log(aleks)


const Person = function(name) {
    this.name = name;
    this.canTalk = true;
  };

  Person.prototype.greet = function() {
    if (this.canTalk) {
      return `Hi, I am  ${this.name}`
    }
  };

  const tina = new Person('tina');
  console.log(tina);
  console.log(tina.greet());