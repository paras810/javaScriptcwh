let click = document.getElementById('click')
click.addEventListener('click', function(e){
    let variable ;
    console.log('click');
    // console.log(typeof e);
    variable = e.target;
    variable = e.target.id
    variable = e.target.className
    variable = e.target.classList
    variable = Array.from(e.target.classList);
    variable = e.offsetX
    variable = e.offsetY
    variable = e.clientX
    variable = e.clientY

    console.log(variable);

})
