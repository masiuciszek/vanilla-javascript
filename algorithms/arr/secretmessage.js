const secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
myFish.splice(3 , 0, 'salmon');
// console.log(myFish);
// console.log(months);

const part1 = secretMessage.slice(0,6);
const part2 = secretMessage.slice(11,24);
// console.log(part1);
// console.log(part2);

const myNewArr = [...part1,...part2];
// console.log(myNewArr);

const oneSentence = secretMessage.join(' ');
// console.log(oneSentence);

const mySecretMessage = secretMessage.splice(6, 11, 'get');
console.log(mySecretMessage);


