let peole = ['paras','rohan','anu','skillF']
// for (let index = 0; index < peole.length; index++) {
//     const element = peole[index];
//     console.log(element);
// }

let obj ={
    name: 'paras',
    language: 'JS',
    hobbies: 'web development'
}
// console.log(obj);
// Iterating an object using Traditional for loop
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }
// for (const key in obj) {
//    console.log(obj[key]);
// }

let myString = 'This is my string';
// for (const char in myString) {
//         console.log(myString[char]);
// }

let anotherString = 'This is another string'
// for (const key in anotherString) {
//         const e = anotherString[key];
//         console.log(e);
// }

// FOR OF LOOP 

for (const name of peole) {
    console.log(name);
}
// for (const string of myString ) {
//     console.log(string);
// }