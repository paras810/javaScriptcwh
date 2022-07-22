let sym1 = Symbol('paras')
let sym2 = Symbol('paras')

console.log(sym1 === sym2);

let k1 = Symbol('identifier for k1')
let k2 = Symbol('for k2')

let obj ={}
obj[k1]= 'anuj'
obj[k2]= 'row'
obj["name"]= 'dont know'

console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
console.log(obj.k2); //cannot do this get row because it is same as obj["k2"]

//symbols are ignored in for in loop
for(key in obj){
    console.log(key, obj[key]);
    console.log(key, obj.name);
}

//object to json
let str= JSON.stringify(obj)
console.log(str);