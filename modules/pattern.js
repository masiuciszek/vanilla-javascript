
// // IFFE
// // we wrapping the function in clousers
// (function(){
//     function foo(){
//         console.log('fooobar');
//     };
//     foo();
// }());


// +function(){
//     function yoo(){
//         console.log('yooo');
//     };
//     yoo()
// }();


// !function(){
//     function woow(){
//         console.log('wooow');
//     };
//     woow()
// }();

// !function(underscore){
//     underscore.someMethod = 'yoooah';
//     console.log(underscore.VERSION);
// }(_);


let awsomeModules = (function(exports){
    let exports = {
        foo: 5,
        bar: 10
    };
    exports.helloMars = function(){
        console.log('Hello Mars!!');
    }
    exports.avedeverci = function(){
        console.log('avedeverciii!!!');
    }
    return exports;
}(awsomeModules || {}));



function reverse(str){

}








