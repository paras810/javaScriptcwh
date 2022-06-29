async function paras (){
    console.log('inside paras function');
    const response = await fetch('https://api.github.com/users')
    console.log('before response');
    const users = await response.json()
    console.log('users resolved');
    return users
}

console.log('before calling paras');
let a = paras()
console.log('after calling paras');
console.log(a);
a.then( function(params){console.log(params)})
console.log('last line of this file');
