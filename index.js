let car = {
    name: 'volvo',
    topSpeed: '444 km/h',
    run: function() {console.log('car is running'); }
}

function carGenerator(givenName, givenSpeed) {
    this.carName = givenName,
    this.carSpeed = givenSpeed,
    this.run = function(){console.log(`${this.carName} is running on speed ${this.carSpeed} km/h `)},

    this.analyze = function(){ console.log(`${this.carName} is slower by ${378 - this.carSpeed} km/h than tesla`)}
  
}
console.log(car);
let car1 = new carGenerator('volvo 2.0',200)
car1 = new carGenerator('Nano',100)
// console.log(car1);
// console.log(car1.run());
console.log(car1.analyze());

