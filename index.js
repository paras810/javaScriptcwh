// general Loops: for, while, do-while

for (i = 0; i < 10; i++) {
    // if(i===9){
    //     i++;
    //     continue
    // }
    if(i===2){break}
    // console.log(i)
}

let a = 10
a++
a += 10 /*it means a = a+10*/
a -= 10 /*it means a = a-10*/
// console.log(a)

let x = 10
let y = 20
x -= y /*it means x = x-y*/
y += x /*it means x = x+y*/
// console.log('x =',x,'y =',y)

// while loop

let w = 0;
while (w < 10) {
    if (w === 1) {
        // break;
        w++;
        continue;

    }
    // console.log(w)

    w += 1;

}


//do while loop
k = 0
do {

    if (k === 5) {
        // break;
        k++
        continue;
    }
    // console.log(k)
    k++;

} while (k < 10);

let arrayy =['hello','done','loop',23,44]
for (let i = 0; i < arrayy.length; i++) {
    const e = arrayy[i]
    // console.log(e);
    
}
arrayy.forEach((e,index, array)=>{
    console.log(e);
    console.log(index);
    console.log(array);
})

let intro ={
    name: 'paras',
    age:999,
    live:'delhi'
}

for(let key in intro){
    // console.log(key);
}