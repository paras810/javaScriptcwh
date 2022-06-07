let mrks = [34,42,32,58,33];
const fruits = ['orange', 'Apple','mango']
const mixed = ['str', 34, [33,'paras']]

// console.log(mrks);
// console.log(fruits[2]);
// console.log(mixed[2][0]);

const arr = new Array('paras',44,55,true)
// console.log(arr);
// console.log(Array.isArray('dd'));

arr[0] = 'ValueChanged' 
// let containArrayValue = arr[0]
// console.log(arr);
// console.log(containArrayValue);
// console.log(mrks.indexOf(58));

// mutating or modifying arrays
// console.log(mrks);
mrks.push('pushedLast')
mrks.unshift('unshiftFirst')
mrks.pop()
mrks.shift()
// mrks.splice(1,3)
mrks.splice(1,0, 'paras', 'done',true, 'added',{name:'paras'})
mrks.reverse()
// console.log(mrks);

let marks2 = {name: 'dine', live: 'nine'}
mrks = mrks.concat(marks2)
console.log(mrks);