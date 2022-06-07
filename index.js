// Type Conversion

let myVar;
myVar = String(33);
myVar = String(true);
myVar = String(undefined);
myVar = String('hello');
myVar = String(new Date());
myVar = String([3,4,4,'paras', true]);

console.log(myVar, typeof myVar);

let i = 23;
i = false;
i = [3,3,666,4432,69];
i = new Date();
console.log(i.toString());
i = {name:'paras', age: 999};
console.log(i.name.toString());

let n = Number('68');
 n = Number('6e5'); /* not this is a number */
 n = Number('6te');  /* NAN */
 n = Number(true);  /* ouput is 1 this is number */
 n = Number(false);  /* ouput is 0 this is number */
 n = Number([1,3,3,3]) /* NAN */
 n = Number([1]) /* number */
console.log(n, typeof n);

let number = 88.088;
number = Number(88.088)
number = parseInt(88.088)
number = parseFloat(88.088)
console.log(number, typeof number );
console.log(number.toFixed(5), typeof number)

//Type Coercion

let str1 = '10';
let num2 = 20 ;
console.log(  num2+ str1 );