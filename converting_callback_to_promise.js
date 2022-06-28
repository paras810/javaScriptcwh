const students = [
    { name: 'paras', subject: 'javascript' }
    , { name: 'anuj', subject: 'php' }
]

function enrollStudent(student) {

    return new Promise(function (resolve,reject) {
       
    setTimeout(() => {
        students.push(student)
        console.log('student has been enrolled');
        let error = false
        if (!error) {
            resolve()
        } else {
            reject()
        }
    }, 1000);

    })

}

function getStudents() {
    setTimeout(() => {
        let str = ''
        students.forEach(e => {
            str += `<li> ${e.name} </li>`
        });
        document.getElementById('students').innerHTML = str
        console.log('students have been fetched');
    }, 3000);
}
let newStudent = { name: 'rohan', subject: 'vue.js' }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log('the error occured');
})