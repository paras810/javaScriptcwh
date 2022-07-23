//character sets []

let reg = /p[a-z]ras/ // a to z
reg = /p[xyz]ras/ // only x,y,z
reg = /p[^xyz]ra[asd]/ // not x,y,z
reg = /p[A-Z]ras/ // A to Z
reg = /p[^xyz]ra[asd]/ // not x,y,z nd only asd
reg = /p[a-zA-Z]ra[s0-9]/ // a to z or A to Z and s or 0-9
reg = /paras[^9]/ // not 9

// Quantifiers {}
reg = /par{3}as/ // r 3 times
reg = /par{0,2}as/ // r can occur exactly 0 to 2 times

//grouping ()
reg = /(par){2}done/ // par 2 times
reg = /(ok){3}([0-9]r)3/ // ok 3 times nd 0-9 with r3
reg = /(ok){3}([0-9]r){3}/ //

let str = 'parpardone bhai'
 str = 'okokok6r3 work'
 str = 'okokok6r3r1r work'

let r = reg.exec(str)
console.log(r);

if (reg.test(str)) {
    console.log(`The string "${str}" matches the expression ${reg.source}`);
} else {
    console.log(`The string "${str}" does not match the expression ${reg.source}`);
}