console.log('note');

// function to show Notes
const addfunction =()=>{
    // console.log('hello');
        let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(e,index) {
        html += ` <div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index+1}. ${e.title}</h5>
          <p class="card-text" id="ipText">${e.text}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`
    });

    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }else{
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section to add notes. `
    }
}
addfunction()


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {

    let addTxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let myObj ={
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = '';
    addTitle.value = '';
    // console.log(notesObj);

    addfunction()
})

// function to delete notes
function deleteNotes(index) {
    // console.log('iam deleting');
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    addfunction()
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',()=>{
    let inputVal = search.value.toLowerCase()
    // console.log('input event fired', inputVal);
   let noteCardd = document.getElementsByClassName('noteCard')
   Array.from(noteCardd).forEach(element => {
    let cardText = element.getElementsByTagName('p')[0].innerText;
    if (cardText.includes(inputVal)) {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }
   });
})

// add title, mark a note as important