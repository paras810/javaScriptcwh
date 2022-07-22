const mySet = new Set(); //initialize an empty set
console.log('the set looks like this', mySet);

//adding value to this set
mySet.add('this')
mySet.add('another this')
mySet.add('another this')
mySet.add(11)
mySet.add(11)
mySet.add({names:'paras'})
console.log(mySet);

// let anotherSet = new Set([2,44,'some',true, 'some',{a:3,b:'cal'}])
// console.log(anotherSet)

console.log(mySet.size);
console.log(mySet.has(11));
console.log(mySet.has(1));
console.log(mySet.delete('thiss'));
// console.log(mySet.clear());
// console.log(mySet);

//iterating mySet
// for (const item of mySet) {
//     console.log("item is : ",item);
// }
mySet.forEach(e => {
    console.log("item is : ",e);
});

//converting mySet to an array
let mySetToArray = Array.from(mySet)
console.log(mySetToArray);