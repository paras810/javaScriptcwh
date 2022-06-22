let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function  buttonClickHandler(){
console.log('clicked');

// instantiate an xhr object
const xhr = new XMLHttpRequest()

//open the object
xhr.open('GET','./paras.text', true)

//use this for post
xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true)
// xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded')
xhr.getResponseHeader('Content-type','application/json')


//what to do on progress (optional)
xhr.onprogress = function(){
    console.log('on progress');
}
// what to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
    console.log(this.responseText);
    }else{
        console.log('some error occured');
    }
}
//send the request
params = `{"name":"test1","salary":"12","age":"21"}`
xhr.send(params)
console.log('we are done');
}
