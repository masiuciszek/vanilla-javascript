function findLongestWordLength(str) {
   let word = str.split(' ');
   let maxLength = 0;;
    for(let i = 0; i < word.length; i++){
        if(word[i].length > maxLength) {
            maxLength = word[i].length;
        }
    }
    return maxLength;
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWordLength("hello my name is marcell"));


  function findLongestWordLength2(str) {
      return str.split(' ')
        .reduce((a,b) => {
            return Math.max(a,b.length)
        } , 0)
  }

  console.log(findLongestWordLength2('hello my name is marcell'))