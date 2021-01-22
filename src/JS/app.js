import { content, showBooks } from './dom.js';
content();
let myLibrary = [];
let bookId = 0;
const addBt = document.querySelector('.Add-button');
const form = document.querySelector('.init');
const ftitle = document.querySelector('.f-title');
const fauthor = document.querySelector('.f-author');
const fpages = document.querySelector('.f-pages');
const fedition = document.querySelector('.f-edition');
const fsubmit = document.querySelector('.f-submit');
const bookCard = document.querySelector('.book-card');
const id = document.querySelector('#id');

// Modal
const modal = document.createElement('div');
modal.setAttribute('class', 'my-modal');
const modalText = document.createElement('p');
modalText.setAttribute('class', 'modal-text');
modal.appendChild(modalText);

root.appendChild(modal);


function Book(title, author, pages, edition, read, Id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.read = !read;
  this.id = Id;
}
addBt.addEventListener('click', () => {
  if (form.className === 'init') {
    form.className = 'show'
  } else if (form.className === 'show') {
    form.className = 'init';
  }
})

const updateLocalStorage = () => {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  const currentId = Number(localStorage.getItem('lastBookId')) + 1;
  console.log(currentId);
  localStorage.setItem('lastBookId', currentId);
}

const clearInput = () => {
  ftitle.value = '';
  fauthor.value = '';
  fpages.value = '';
  fedition.value = '';
}

const addNewBook = () => {

    let currentId = Number(localStorage.getItem('lastBookId'));
    if(currentId != null) {
      currentId += 1;
    } else {
      localStorage.setItem('lastBookId', 0);
      currentId = 0;
    }
    const book = new Book(ftitle.value, fauthor.value, fpages.value, fedition.value, false, currentId);
    myLibrary.push(book);
    updateLocalStorage();

  render();
}
const modalAlert = (e) => {
  e.preventDefault();
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === '') {
    modal.style.display = 'block';
    modalText.textContent = 'There are data missing, please check it.';

    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    setTimeout(() => document.querySelector('.my-modal').remove(), 6000);
  } else {
    addNewBook();
    clearInput();
    form.className = 'init';
    // window.location.reload;
  }
  window.location.reload;
  
}
// fsubmit.addEventListener('click', (e) => {
//   if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === '') {
//     // modalAlert();
//     modal.style.display = 'block';
//     modalText.textContent = 'There are data missing, please check it.';
//     console.log('adf');
//   } else {
//     addNewBook();
//   window.location.reload;

//   }
// });

fsubmit.addEventListener('click', modalAlert);

const getBookByID = (id) => myLibrary.filter((book) => book.id === id)[0];
window.deleteBook = (s) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  const index = myLibrary.findIndex(book => {
    return book.id === s;
  })
  myLibrary.splice(index, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render();
}
const render = () => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  if (myLibrary != null){
    bookCard.innerHTML = '';
    myLibrary.forEach(book => {
      showBooks(book);
    })
    // for(let i = 0; i < myLibrary.length; i += 1){
    //   showBooks(myLibrary[i]);
    // }
  } else {
    myLibrary = [];
  }
}
window.readStatus = (s) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  let index = myLibrary.findIndex(book => {
    return book.id === s;
  });
  myLibrary[index].read = !myLibrary[index].read;
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render();
}
window.onload = () => {
  render();
}