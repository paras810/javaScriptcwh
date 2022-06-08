const name = 'Paras'
const name2 = 'Anuj'

// console.log(`“Hi! Welcome to ${name}. We will get back to you within 3 hours. In the meantime, you can check out our help center. We have put a lot of effort into it, so the answer to your question may already be in there!”`);

// console.log(`“Hi! Welcome to ${name2}. We will get back to you within 3 hours. In the meantime, you can check out our help center. We have put a lot of effort into it, so the answer to your question may already be in there!”`);

const func =(nameVal, greeting='good morning')=>{
   
     let msg =`“Hi! Welcome to ${nameVal}. We will get back to you within 3 hours. In the meantime, you can check out our help center. We have put a lot of effort into it, so the answer to your question may already be in there!” ${greeting.toUpperCase()}`
     return msg
}
// let val = func('html',name2)
// let val2 = func('nothing')
// console.log(val);

let hello = function wish(e,id) {
    let msg = `“Hi! Welcome to ${e}. We will get back to you within 3 hours. In the meantime, you can check out our help center. We have put a lot of effort into it, so the answer to your question may already be in there!” ${id.toUpperCase()}`
    return msg;
}
// let func1 = wish('paras','good bye')
// console.log(func1);

// console.log(hello('done','bye')) 

const obj ={
    name: 'paras',
    age: 3333,
    run: paras=()=>{ return 'hi'},
}

/*both has same output */
// console.log(obj.run()); 
// console.log(paras());

const arr =['orange','apple','banana']
arr.forEach((e,index)=>{
// console.log(e,index);
})

//try var instead of let for learning
if(1){
    let i = 234;
    console.log(i);
}
let i = 'PARAS'
console.log(i);

function ui(name) {
    let i = 9;
    console.log(i);
    return `this is a ${name} ui`
}
console.log(ui('paras'),i);


















