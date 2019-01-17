function capitilaizeFirstLetter(word) {
    let capWord = word.toLowerCase();
    capWord = [...capWord];
    capWord[0] = capWord[0].toUpperCase()
    capWord = capWord.join('');
    return capWord;
}

console.log(capitilaizeFirstLetter('hello'))

const capitlilaize = string => string[0].toUpperCase() + string.slice(1);
console.log(capitlilaize('legia'));

const capitilaize2 = x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
console.log(capitilaize2('test'));

const capitilaize3 = word => word[0].toUpperCase() + [...word].slice(1).join('')
console.log(capitilaize3('testing123'));

