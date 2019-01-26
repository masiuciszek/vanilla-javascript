// how an array would work

class MyOwnArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length ++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index]
        this.shifItems(index);
        return item;
    }
    shifItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
}

const masiusArray = new MyOwnArray();

console.log(masiusArray);
console.log(masiusArray.push('marcell'));
console.log(masiusArray.push('love'));
console.log(masiusArray.push('JS'));
// console.log(masiusArray.push('yo'));
// console.log(masiusArray.pop('yo'));



