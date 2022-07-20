let maps = new Map();
// console.log(maps);

const key1 = 'myStr', key2 = {},key3 = function () {};

//setting map values
maps.set(key1, 'Str');
maps.set(key2, 'obj');
maps.set(key3, 'function');

// console.log(maps);

//getting the values from a Map
let value1 = maps.get(key1);
// console.log(value1);

// getting the size of map
// console.log(maps.size);

//you can loop using for..of to get keys and values
for(let [key, value] of maps){
// console.log(key, value);
}

// get only keys
for (const key of maps.keys()) {
    // console.log(key);
}

//get only value
for(let value of maps.values()){
    // console.log(value);
}

//you can loop through a map using for each loop
maps.forEach((value,key)=>{
// console.log('value is ', value);
// console.log('key is ', key);
})

// converting map to an array
let Aarray = Array.from(maps)
console.log('Map to array is ' ,Aarray);

// converting map key to an array
let ArrayKey = Array.from(maps.keys())
console.log('MapKeys to array is ' ,ArrayKey);

// converting map value to an array
let ArrayVal = Array.from(maps.values())
console.log('MapValues to array is ' ,ArrayVal);
