// Primitive data types

//string
 let name = 'paras'
 console.log('my name is '+ name);
 console.log('data type of '+ typeof name);

 //number
 let n = 33
 console.log('data type of'+ typeof n);

 //boolean
 let drive = true
 console.log('data type of '+ typeof drive);

 //boolean
 let nullVal  = null
 console.log('data type of '+ typeof nullVal );

 //undefined
 let und = undefined;
 console.log('data type of ', typeof und)

//2. Reference data types

// arrays
let myarr =[1,2,3,4,5,6, 'string']
console.log('data type of ' , typeof myarr);

//object literals
let marks ={
    paras:76,
    rohan: 34,
    'anuj singh': 44
}

console.log( marks);
console.log( marks["anuj singh"]);

//function

function myfunction(){
    // alert('hi')
}
console.log(typeof myfunction);
myfunction()

//date
let date = new Date()
console.log(typeof date);
