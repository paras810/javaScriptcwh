let age = 49
if (age===29) {
    console.log('age is 29');
}
else if (age===19) {
    console.log('age is 19');
}
else{
    console.log('age is not 29');
}
let vari = undefined;
if (typeof vari !== 'undefined') {
    console.log('if not undefined');
} else {
    console.log('if undefined');
}

let drive= '';
if (!drive & age>18) {
    console.log('drive has some value');
} else {
    console.log('drive has not  value');
}

if (drive || age>18) {
    console.log('value');
} else {
    console.log('not value');
}

let name = 'paras'
 name = 'passssssras'
name==='paras'?console.log('your name is paras'): console.log('who are you? ');

switch (age){
    case 10:
    console.log('age is 10');
    break;

    case 20:
        console.log('age is 20');
    break;

    case 49: console.log('age is 49');
    break;

    default: console.log('age is not defined');
}