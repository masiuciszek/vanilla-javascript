const Singletom = (function() {
    let instance;

    function createInstance(){
        const object = new Object({name: 'Brad'});
        return object;
    }
    return {
        getInstance: function(){
            if(!instance) {
                instance = createInstance()
            }
            return instance;
        }
    }
})();

const instanceA = Singletom.getInstance();
const instanceB = Singletom.getInstance();

console.log(instanceA);
console.log(instanceB);