let reg = /paras/
// reg = /paras/g
// reg = /paras/i
// console.log(reg);
// console.log(reg.source)

//functions to match expression
let str = " done (paras) this is great done code with paras done"

//1. exec() - this function will return an array for match or null for no match

let result = reg.exec(str)
// result = reg.exec(str)
// console.log(result);
// result = reg.exec(str)
// console.log(result); //we can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }


// 2. test() - returns true or false

let result2 = reg.test(str)
// console.log(result2); //this will only print true if the "reg" is there in the string "str"

// 3. match() - it will return an array of results or null

reg = /paras/g
// let result3 = reg.match() //ALERT this is wrong
let result3 = str.match(reg) //this is right
// console.log(result3);

// 4. search() - returns index of first match or -1

reg = /done/
// reg = /paradds/
// let result4 = reg.search(str) //ALERT this is wrong
let result4 = str.search(reg) //ALERT this is right
// console.log(result4);

// 5. replace() - return new replaced string with all the replacements (if no flag is given, first match will be replaced)

reg = /done/g
let result5 = str.replace(reg, 'CODING')
console.log(result5)