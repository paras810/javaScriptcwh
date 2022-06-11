console.log(Math);
let number =6.63
number =6.55
let number2 =-2
console.log(Math.round(number))
console.log(Math.ceil(number))
console.log(Math.floor(number))
console.log(Math.abs(number2))
console.log(Math.sqrt(4));
console.log(Math.pow(2,4));
console.log(Math.max(33,33,33,999,22));
console.log(Math.min(33,33,33,999,22));
console.log(Math.ceil(Math.random()*5));


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  console.log(getRndInteger(4,8))