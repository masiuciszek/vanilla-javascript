const promiseToDo = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`I did it`), 999);
    })
}

const watchOver = async () => {
    const something = await promiseToDo();
    return something + ' and I watched it';
}

const watchOverWatchOverAndPromisToDo = async () => {
    const something = await watchOver();
    return something + ' and i watched over it as well';
}

watchOverWatchOverAndPromisToDo().then(res => {
    console.log(res);
})


const promiseit = () =>{
    return new Promise((resolve) => {
        setTimeout(() => resolve('yooo'), 2000)
    })
}

const promiseitAsynce = async () => {
    const output = await promiseit();
    return output;
}

promiseit().then(res => console.log(res))


const whatTodo = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('we dit it'), 700);
    });
}

const whatNext = async () => {
    const next  = await whatTodo();
    return next +  ' maybe going out'
}

const whatafterthat = async () => {
    const next = await whatNext();
    return next + " maybe go grab a burger"
}

whatafterthat().then(res => setTimeout(() => console.log(res),5222))