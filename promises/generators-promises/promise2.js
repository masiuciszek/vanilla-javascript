function doAsync(){
    return Promise.resolve('some string');
}

doAsync().then((val) => {
    console.log('ok: ' + val)
}, (reason) => {
    console.log('nope: ' + reason);
})

let p1 = new Promise();
let p2 = new Promise('p2');


Promise.all([p1,p2])
    .then((val) =>{
        console.log('ok');
    }, (reason) => {
        console.log('nope');
    });
