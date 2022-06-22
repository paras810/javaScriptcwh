let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function  buttonClickHandler(){
console.log('clicked');

// instantiate an xhr object
const xhr = new XMLHttpRequest()

//open the object
xhr.open('GET','./paras.text', true)

//what to do on progress (optional)
xhr.onprogress = function(){
    console.log('on progress');
}
// what to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
    console.log(this.responseText);
    }else{
        console.error('some error occured');
    }
}
//send the request
xhr.send()
console.log('we are done');
}