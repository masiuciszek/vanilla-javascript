function nonMutatingConcat(original, attach) {

    let newArray = original.concat(attach);

    return newArray;
  }
  let first = [1, 2, 3];
  let second = [4, 5];
  let result = nonMutatingConcat(first, second);
  console.log(result);


