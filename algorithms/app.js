function sumAllArr(arr){
    let total = 0;
     for(let i = 0; i< arr.length; i++){
        if(arr[i] >= 0) {
            total += parseInt(arr[i]);
        }
     }
     return total;
  }

  console.log(sumAllArr(myArr));


  function sumAllArr2(arr){
    let total = 0;
     for(let i = 0; i< arr.length; i++){
         arr[i] >= 0 ? total += parseInt(arr[i]) : 0;
     }
     return total;
  }

  console.log(sumAllArr2(myArr));
