// console.log('es6')

class Book{
    constructor(givenName, givenAuthor, givenType) {
        this.name = givenName,
            this.author = givenAuthor,
            this.type = givenType
        }
}

class Display{
    add(book) {
        console.log('adding to UI');
        let tableBody = document.getElementById('tableBody')
        let uiString = `
            <tr>
               <td>${book.name}</td>
               <td>${book.author}</td>
               <td>${book.type}</td>
            </tr>`
        tableBody.innerHTML += uiString
    }

    clear () {
        let libraryForm = document.getElementById('libraryForm')
        libraryForm.reset()
    }

    validate(book) {
        // console.log('validating');
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        } else {
            return true
        }
    
    }
    show(type , message) {
        // console.log('showing alert');
        let msg = document.getElementById('message')
        let text;
        if(type ==='success'){
         text = 'Success'
        }else{
            text = 'Error!'
        }
        msg.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>${text} </strong> ${message}
    </div>
    `
    setTimeout(() => {
        msg.innerHTML = ``
    }, 2000);
    }
}

// add submit event listener to libraryForm
function libraryFormSubmit(e) {
    // console.log('sumbitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    // fiction, programming, cooking
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display()
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success', 'Your book has been successfully added.')
    } else {
        // show error to the user
        display.show('danger', 'Sorry you can not add this book.')
    }
    e.preventDefault()
    // alert('hi')
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);



