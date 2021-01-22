import { content, showBooks } from './dom.js';

content();

let myLibrary = [];
const addBt = document.querySelector('.Add-button');
const form = document.querySelector('.init');
const ftitle = document.querySelector('.f-title');
const fauthor = document.querySelector('.f-author');
const fpages = document.querySelector('.f-pages');
const fedition = document.querySelector('.f-edition');
const fsubmit = document.querySelector('.f-submit');
const bookCard = document.querySelector('.book-card');

function Book(title, author, pages, edition, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.read = read;
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
    const book = new Book(ftitle.value, fauthor.value, fpages.value, fedition.value);
    myLibrary.push(book);
    updateLocalStorage();
  }
  
}

fsubmit.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBook();
  
});

// const getLocalStorage = () => {
//   myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

//   if (myLibrary === null) {
//     myLibrary = [];
//   }
//   for(let i = 0; myLibrary.length; i += 1){
//     showBooks();
    
//   }
// }
const render = () => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  // myLibrary.forEach((book) => {
  //   console.log(book.title);
  //   if (myLibrary === null) {
  //     myLibrary = [];
  //   }
  //   showBooks(book);
  // })
  if (myLibrary != null){
 
    bookCard.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i += 1){
      showBooks(myLibrary[i]);
    }
  } else {
    myLibrary = [];
  }
}

const deleteBook = (book) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary.splice(book, 1);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  getLocalStorage();
}

const readStatus = (s) => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary[s].read = !myLibrary[s].read;
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  getLocalStorage();
}

window.onload = () => {
  render();
}
//getLocalStorage();



