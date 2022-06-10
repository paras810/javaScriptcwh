// localStorage.setItem('name','paras')
// localStorage.setItem('age',999)
// localStorage.clear()
// localStorage.removeItem('age')

let getLocalStrValName = localStorage.getItem('name')
let getLocalStrValAge = localStorage.getItem('age')
// localStorage.clear()
// console.log(getLocalStrValName);
// console.log(getLocalStrValAge);


// adding array in local storage
let array = ['orange', 'banana','apple','mango']
localStorage.setItem('fruitsList', JSON.stringify(array))
let stringToArray =  JSON.parse(localStorage.getItem('fruitsList'))

// console.log(stringToArray );
// console.log(stringToArray[0]);

// sessionStorage.setItem('name','Sparas')
// sessionStorage.setItem('age',111)
// sessionStorage.setItem('no',222)
// sessionStorage.setItem('yes',333)
// sessionStorage.getItem('name')
// console.log(sessionStorage.getItem('name'));



//fun
// let obj = {type: 'object'}
// let string = JSON.stringify(obj)
// console.log(string ,' type of ',typeof string);
// let backToObj = JSON.parse(string)
// console.log(backToObj ,' type of ',typeof backToObj);
