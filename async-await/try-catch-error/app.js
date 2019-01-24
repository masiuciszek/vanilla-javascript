
// try {
//     testFunc()
// } catch (error) {
//     console.log(error);
//     console.log(error.message); // testfunc is not defined
//     console.log(error.name);// refence error
//     console.log(error instanceof TypeError); // false
//  } finally {
//      console.log('Finally runs no mather of the result');
//  }

// console.log('program continuous...')


const user = {email: '123@gmail.com'};

try {
    if(!user.name){
        // throw ' user has no name';
        throw new SyntaxError('user has no name');
    }
} catch (err) {
    console.log(err)
} finally {
    console.log('finally is on brooo');
}