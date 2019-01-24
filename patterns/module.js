// Basic structure

// IFFIE

// (function(){
//     // declare private variables and functions
//     return {
//         //Declare public var and functions
//     }
// })();

// // STANDARD MODULE PATTERN
// const UiCtrl = (function() {
//     let text = 'hello therree!!!';

//     const changeText = function(){// function expression
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
//     return {
//         callChangeText: function(){
//             changeText()
//             console.log(text);
//         }
//     }
// })();

// UiCtrl.callChangeText();


const itemCtroller = (function() {
    let data = [];

    function add(val){
        data.push(val);
        console.log('value added!!!')
    }
    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }
    return {
        add: add,
        get: get
    }
})();

itemCtroller.add({id: 4, name: 'masiu'});
itemCtroller.add({id: 3, name: 'kingen'});
itemCtroller.add({id: 2, name: 'baros'});
console.log(itemCtroller.get(4));
console.log(itemCtroller.get(3));
console.log(itemCtroller.get(2));

const myDb = (function() {
    let dataBase = [];

    function addData(user){
        dataBase.push(user);
    }

    function getData(id){
        return dataBase.find(user => {
            return user.id === id;
        });
    }

    return {
        addData: addData,
        getData: getData
    }

})();

myDb.addData({name: 'tina', id: 2});
console.log(myDb.getData(2));

// clousere exempel
function makeCount(val){
    let count =0;
    return function(){
        count ++;
        return count + val;
    }
}

const coundDog= makeCount(' dog');
const coundBird= makeCount(' bird');