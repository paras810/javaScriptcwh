let obj = {
    name: 'Nothing',
    age: 0000,
    live: 'unknown'
}
console.log(obj);

function msg(giveName) {
    this.emplyName = giveName
}
let msg2 = new msg('javascript')
console.log(msg2);

msg.prototype.getName = function(){
return this.emplyName
}
console.log(msg2.getName());

msg.prototype.setNewName = function (newName) {
   return this.emplyName = newName
}
console.log(msg2.setNewName('addedNewName'));
console.log(msg2);


