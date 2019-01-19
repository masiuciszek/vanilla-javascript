
const breathe = (ammount) => {
    return new Promise((resolve,reject) => {
        if( ammount < 400) {
            reject('the ammont is to loow!!');
        }
        setTimeout(() => resolve(`done for ${ammount} ms`), ammount);
    })
}

function catchErrors(fn) {
    return function() {
        // return the function (fn) = argument
        return fn().catch(err => {
            console.error('nooo we got a problem')
            console.error(err);
        })
    }
}

const go = async () => {
  const res = await breathe(500);
  console.log(res);
  const res2 = await breathe(700);
  console.log(res2);
  const res3 = await breathe(900);
  console.log(res3);
  const res4 = await breathe(350);
  console.log(res4);
}

const callbackFunc = catchErrors(go);

callbackFunc();