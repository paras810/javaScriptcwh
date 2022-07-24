// character classes
let reg = /\was/ //word character - _ or alphabets or numbers
reg = /\w+as/ // one or more than one word characters
reg = /\Was/ // non word chacracter
reg = /\W+as/ // one or more than one non word chacracter
reg = /\d999/g // one digit with 999
reg = /\d+999/g // one or more than one digit with 999
reg = /\D999/g //  one non digit with 999
reg = /\D+999/g //  one or more non digit with 999
reg = /\sis/ // one space with is
reg = /\s+is/ // one or more space with is
reg = /\Sis/ // one no space with is
reg = /\S+is/ // one or more no space with is
reg =/bhai\b/ // word boundary - after bhai a word should be come

//assertions
reg = /para(?=z)/ // after para should be z
reg = /para(?!z)/ // after para should be anything except z
let str = 'okokok6r3r1r work drry he*llo_par+++   as bhaik bhai my number  is 87993999 12Zpar-_as@999#    space9@+$is for assertions para#'

let r = reg.exec(str)
console.log(r);
// r = reg.exec(str)
// console.log(r);

if (reg.test(str)) {
    console.log(`The string "${str}" matches the expression ${reg.source}`);
} else {
    console.log(`The string "${str}" does not match the expression ${reg.source}`);
}