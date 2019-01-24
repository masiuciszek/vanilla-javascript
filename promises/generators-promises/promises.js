
function doAsync(){
    let promise = new Promise ((res,rej) => {
        console.log('in promise code...');
        setTimeout(() => {
            console.log('... waitng for answer')
            res();
        },4000)
    });
    return promise;
}

let print = doAsync();

function doAsync2(){
    let p = new Promise((res,rej) => {
        console.log('waintg for answer');
        setTimeout(() => {
            console.log('...still waiting')
            rej();
        },5666)
    });
    return p;
}

doAsync().then(() => {
    console.log('tes i got it!');
}).then(() => {
    console.log('nope dide\'nt get it')
})