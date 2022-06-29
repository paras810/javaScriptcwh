let myBtn = document.getElementById('myBtn')
let content = document.getElementById('content')

// function getData() {
//     console.log('started getData');
//     let url = 'paras.text'
//     fetch(url).then((response)=>{
//         console.log('inside first then');
//         return response.text()
//     }).then((data)=>{
//         console.log('inside second then');
//         console.log(data);
//     })
// }
// console.log('before running getData');
// getData()
// console.log('after running getData');

// function getData() {
//     console.log('started getData');
//     let url = 'https://api.github.com/users'
//     fetch(url).then((response)=>{
//         console.log('inside first then');
//         return response.json()
//     }).then((data)=>{
//         console.log('inside second then');
//         console.log(data);
//     })
// }
// console.log('before running getData');
// getData()
// console.log('after running getData');

function postData() {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    let data = ``
    let params ={
        method: 'post'
        ,headers:{
            'content-Type':'application/json'
        },
        // use this if data is in json
        // body: JSON.stringify(data)
         // use this if data is in string
        body: data
    }
    fetch(url, params).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data );
    })
}
postData()