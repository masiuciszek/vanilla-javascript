class Inventory{

    constructor(){
        this.items = [];
    }
    addItem(item){
     this.items.push(item);
     return this.items;
    }
    getItems(item){
     this.items[item];
     return this.items[item]

    }
    getCount(){
        return this.items.length;
    }

    exists(item){
      for(let i = 0; i < this.items.length; i++){
            if(this.items[i] === item) return true;
      }
      return false;
    }

    humanReadableFormat(){
        return `this is our list with ${this.items}`;
    }

    sort(){
        return this.items.sort((a,b) => a > b);
    }

}

const myInventory = new Inventory();


console.log(myInventory);
console.log(myInventory.addItem('apples'));
console.log(myInventory.addItem('carrots'));
console.log(myInventory.addItem('avocados'));
console.log(myInventory.getItems([0]));
console.log(myInventory.getItems([1]));
console.log(myInventory.getCount());
console.log(myInventory.exists('apples'));
console.log(myInventory.exists('oranges'));
console.log(myInventory.sort());
console.log(myInventory.humanReadableFormat());



