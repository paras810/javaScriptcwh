let element = document.getElementById('first')
// element = element.className
// element = element.childNodes
// element = element.parentNode
element.style.backgroundColor = 'yellow'
element.innerText = 'Good Morning'
element.innerHTML = `<b> Good Morning </b>`
// console.log(element);

let sel = document.querySelector('#first')
sel = document.querySelector('.child')
sel = document.querySelector('b')
sel = document.querySelector('div')
sel.style.color = 'green' 

// console.log(sel);

// multi element selector

let elems = document.getElementsByClassName('child')
// console.log(elems[1]);
elems = document.getElementsByTagName('div')
console.log(elems);
console.log(typeof elems);

// Array.from(elems).forEach(e=>{
//     console.log(e)
//     e.style.color = 'red'
// })

// for(i=0; i<elems.length; i++){
//    let e = elems[i]
//    e.style.color = 'red'
// }
for(let i of elems){
    i.style.color = 'red'
}
elems[1].style.color = 'blue'