function getObject(id, name){
    let obj = {id,name}
    return obj
  }

  console.log(getObject(2, "Jad"));

  function createObj(name,age,city,id) {
      let myObj = {name,age,city,id}
      return myObj;
  }

  console.log(createObj('aleks',22,'LA',3));


  function Person(name,age) {
      this.name = name;
      this.age = age;
      this.belly = [];
  }

  Person.prototype.eat = function(food) {
      this.belly.push(food);
      return this.belly;
  }

  const tina = new Person('Tina', 34);
  console.log(tina)
  console.log(tina.eat('burger'));
  console.log(tina.eat('fries'));