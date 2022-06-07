let name = 'paras';
const greeting = 'good morning'
console.log(greeting, ' ', name);

let html;
html = ' <h1>this is a heading</h1>' +
    '<p>this is a para</p>'+ '<p>this is a another para</p>'
  
  html = html.concat(' JavaScript', ' Html')
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html.endsWith('l'));
// console.log(html.endsWith('is'));

console.log(html);
// console.log(html[0]);
// console.log(html.indexOf('h1'));
// console.log(html.lastIndexOf('h1'));
// console.log(html.charAt(2));
// console.log(html.endsWith('l'));
// console.log(html.endsWith('2'));
// console.log(html.startsWith(' <h1>'));
// console.log(html.includes('pa'));
// console.log(html.includes(' kdfjdsj'));
// console.log(html.substring(1,6)); /* n-1 negative value not acceptale*/
// console.log(html.slice(1,-6));
// console.log(html.split('a'));
// console.log(html.replace('this','that'));
// console.log(html.replace(/this/g,'PARAS'));


// Template Literals
let fruit1 = 'Mango';
let fruit2 = 'Banana';
let fruit3 = 'Orange';
let html01 = `<h1>my name is paras</h1>
<p>I like "${fruit1}" , "${fruit2}" and "${fruit3}" .</p>`;

document.getElementById('dom').innerHTML = html01




