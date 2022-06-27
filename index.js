const students = [
    { name: 'paras', subject: 'javascript' }
    , { name: 'anuj', subject: 'php' }
]

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student)
        console.log('student has been enrolled');
        callback()
    }, 3000);
}

function getStudents() {
    setTimeout(() => {
        let str = ''
        students.forEach(e => {
            str += `<li> ${e.name} </li>`
        });
        document.getElementById('students').innerHTML = str
        console.log('students have been fetched');
    }, 1000);
}
let newStudent = { name: 'rohan', subject: 'vue.js' }
enrollStudent(newStudent, getStudents)