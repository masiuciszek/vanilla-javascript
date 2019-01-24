// iterators kind of advanced loops that can be paused

// generator that are function that can be paused and return muliply value




//Iterator
function nameIterator(names) {
    let nextIndex= 0;

    return {
        next: function() {
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false} :
            { done: false }
        }
    }
}

const namesArr = ['masiu', 'pysia', 'alesk'];
//init iterator and pass in the names array
const names = nameIterator(namesArr);
console.log(names.next());
console.log(names.next().value);
console.log(names.next().value);



//Generators Exemple
    function* sayNames() {
        yield 'aleks';
        yield 'tim';
        yield 'arek';
    }

    const name = sayNames();
    // console.log(name.next());

    for(const a of name){
        console.log(a);
    }

    function *makeCount(){
        let index= 1;
        while(true) {
            yield index++;
        }
    }

    const generatorValue = makeCount();

    console.log(generatorValue.next().value);
    console.log(generatorValue.next().value);
    console.log(generatorValue.next().value);

    function* test(){
        let count = 5;
        while(true) {
            yield count+=10;
        }
    }

    const countTest = test();
    console.log(countTest.next().value);
    console.log(countTest.next().value)
    console.log(countTest.next().value)
    console.log(countTest.next().value)
    console.log(countTest.next().value)


  