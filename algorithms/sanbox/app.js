
  const myArr = ['1','2','3','4','5'];
function sumAllArr(arr){
    let total = 0;
     for(let i = 0; i< arr.length; i++){
        if(arr[i] >= 0) {
            total += parseInt(arr[i]);
        }
     }
     return total;
  }

//   console.log(sumAllArr(myArr));

  function sumAllArr2(arr){
    let total = 0;
     for(let i = 0; i< arr.length; i++){
         arr[i] >= 0 ? total += parseInt(arr[i]) : 0;
     }
     return total;
  }

//   console.log(sumAllArr2(myArr));


  function math(acc,a,b) {
    let obj = {add: (a+b), sub:(a-b), div:(a/b), mul:(a*b)}
    return obj[acc];
}

// console.log(math('div',10,2))
// console.log(math('sub',10,2))
// console.log(math('mul',10,2))
// console.log(math('add',10,2))

