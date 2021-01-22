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



function Book(title, author, pages, edition, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.read = !read;
  this.id = bookId;
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
}

const addNewBook = () => {
  
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === '') {
    alert('There are data missing, please check it.');
  } else {
    const book = new Book(ftitle.value, fauthor.value, fpages.value, fedition.value, false, id);
    myLibrary.push(book);
    updateLocalStorage();
  }
  render();
}

fsubmit.addEventListener('click', () => {
  addNewBook();
  window.location.reload;
});

const getBookByID = (id) => myLibrary.filter((book) => book.id === id)[0];

window.deleteBook = (book) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary.splice(getBookByID(book), 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render();
}

const render = () => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  if (myLibrary != null){
 
    bookCard.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i += 1){
      showBooks(myLibrary[i]);
    }
  } else {
    myLibrary = [];
  }
}

window.readStatus = (s) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary[s].read = !myLibrary[s].read;
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  render();
}

window.onload = () => {
  render();
}
