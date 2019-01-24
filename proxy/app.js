
let handler = {
    get (target, key){
        return key in target ? target[key] : 24;
    }
};

let p = new Proxy({} , handler);

 p.a = 10;
 p.b = undefined;

 console.log(p.a , p.b);
 console.log('c' in p, p.c);




let handler2 = {
    get(target,name){
        return name in target ? target[name] : 'that dosen\t exict in this proxy object mate'
    }
};

let myProxy = new Proxy({}, handler2);

myProxy.age = 22;
myProxy.nooo = undefined;
console.log(myProxy);
console.log('a' in myProxy, myProxy.c);


 let validator = {
     set: function(obj, prop, val){
        if(prop === 'age'){
            if(typeof val !== 'number' || Number.isNaN(val)){
                console.log('age must be a number');
            }
            if(val < 0){
                console.log('Age must be a posetive number');
            }
        }
        obj[prop] = val;
        return true;
     }
 }

 let aleks = new Proxy({}, validator);
 console.log(aleks.age = 'young');
 console.log(aleks.age = -22);
 console.log(aleks.age = 100);
 console.log(aleks.age = 23);

