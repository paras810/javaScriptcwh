let element = document.createElement('li')

element.className = 'createClass';
element.id = 'createId';
element.setAttribute('title','hello')
// element.textContent= 'Created Text'
let elmTxt = document.createTextNode('Created Text')
element.appendChild(elmTxt)

let ul = document.querySelector('ul.this')
// ul.appendChild(element)
ul.appendChild(element).style.backgroundColor= 'yellow'
console.log(element);


let newh1 = document.createElement('h1')
newh1.className = 'H1Class'
newh1.id = 'H1Id'
let h1Text = document.createTextNode('Heading')
newh1.appendChild(h1Text)

// document.querySelector('ul.this').firstElementChild.nextElementSibling.appendChild(newh1)
document.querySelector('ul.this').appendChild(newh1).style.background = '#fc3903'
 element.replaceWith(newh1)

 let first = document.getElementById('first')
 let third = document.getElementById('third')
//  third.replaceWith(first)

let newChild = document.createElement('h6')
let h6Text = document.createTextNode('Heading6')
newChild.appendChild(h6Text)

ul.replaceChild(newChild,first )
// ul.replaceChildren(newChild,first )
// ul.removeChild(third)

let getAttr = newh1.getAttribute('id') 
getAttr = newh1.getAttribute('class') 
console.log(getAttr);
