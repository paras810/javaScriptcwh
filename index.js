let btn = document.getElementById('btn')
let container = document.querySelector('.container')
const func1 =(e)=>{
    // console.log('thanks', e.offsetX);
    e.preventDefault()
    container.style.backgroundColor = `rgba(${e.offsetX} ${e.offsetY} ${e.clientX+20} )`
    }
const func2=(e)=>{
    // console.log('thanks', e.offsetX);
    e.preventDefault()
    container.style.backgroundColor = ``
    }
// btn.addEventListener('click', func1)
container.addEventListener('mousemove', func1)
container.addEventListener('mouseleave', func2)
// btn.addEventListener('dblclick', func1) run again

