const proto = {
    slogan: function(){
        return 'this company is the best'
    },
    changeName: function(newName){
    return this.name = newName;
    }
}
//  this create paras object
const paras = Object.create(proto)
paras.name = 'newParas'
paras.role = 'role'
paras.changeName('i know')
// console.log(paras);

//  this also create paras object
const paras2 = Object.create(proto,{
    name:{value:'paras', writable: true},
    yourRole: {value:'ok'}
})
// console.log(paras2);
// console.log(paras2.changeName('paras2'));


// Employee constructor
function Employee(name, salary, experience){
    this.name = name,
    this.salary = salary,
    this.experience = experience
} 
// slogan
Employee.prototype.slogan= function(){
    return `this company is best, Regards, ${this.name}`
}
let anuj = new Employee('anuj', 00, '1 years') 
// console.log(anuj);
console.log(anuj.slogan());

//programmer
function programmer(name,salary, experience, language){
Employee.call(this,name, salary,experience)
this.language = language
}
// inherit the prototype
programmer.prototype = Object.create(Employee.prototype)

// manually set the constructor
programmer.prototype.constructor = programmer

let mohan = new programmer('mohan',11,11,'javaScript')

console.log(mohan);
// console.log(mohan.slogan());