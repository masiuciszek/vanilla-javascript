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