let re;
// litteral
re = /hello/;
re = /hello/i;

//matchcharachter Symbols
re = /^h/i;         // must start with
re = /world$/i;         // must start with
re = /^hello$/i;         // must begin and end with
re = /^h.llo$/i;         // matches anyone
re = /h*llo/i;         // marchet 0 ore more
re = /gre?a?y/i;         // optional charachter
re = /gre?a?y\?/i;         // escape charachter


//string to match
const str = 'gray';

// log result
const result =re.exec(str);
console.log(result);


function reTest(re ,str){
    if(re.test(str)){
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);