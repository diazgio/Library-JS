import { content } from './dom.js';

content();

let myLibrary = [];
const addBt = document.querySelector('.Add-button');
const form = document.querySelector('.init');
const ftitle = document.querySelector('.f-title');
const fauthor = document.querySelector('.f-author');
const fpages = document.querySelector('.f-pages');
const fedition = document.querySelector('.f-edition');
const fread = document.querySelector('.f-read');
const fsubmit = document.querySelector('.f-submit');
const bookCard = document.querySelector('.book-card');

function Book(title, author, pages, edition, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.read = !read;
}

addBt.addEventListener('click', () => {
  form.className = 'show'
})


const updateLocalStorage = () => {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

fsubmit.addEventListener('click', () => {
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === '') {
    alert('There are data missing, please check it.');
  } else {
    const book = new Book(ftitle.value, fauthor.value, fpages.value, fedition.value, fread);
    myLibrary.push(book);
    updateLocalStorage();
  }
});


const readContent = (s) => {
  let status;
  if (myLibrary[s].read === true) {
    status = 'Read';
  } else {
    status = 'Not Read';
  }
  return status;
}

const showBooks = () => {
  bookCard.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const m = readContent(i);
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    const cardTitle = document.createElement('h2');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = myLibrary[i].title;

    const cardAuthor = document.createElement('h3');
    cardAuthor.setAttribute('class', 'card-author');
    cardAuthor.innerText = `Author: ${myLibrary[i].author}`;

    const cardPage = document.createElement('p');
    cardPage.setAttribute('class', 'card-page');
    cardPage.innerText = `Number of pages: ${myLibrary[i].pages}`;

    const cardEdition = document.createElement('p');
    cardEdition.setAttribute('class', 'card-edition');
    cardEdition.innerText = `Edition: ${myLibrary[i].edition}`;

    const cardRead = document.createElement('p');
    cardRead.setAttribute('class', 'card-read');
    cardRead.innerHTML = `${m}`;

    const readButton = document.createElement('button');
    readButton.className = 'read-btn';
    readButton.innerHTML = 'Change Status';
    readButton.setAttribute('onclick', `readStatus(${i})`);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('onclick', `deleteBook(${i})`);

    bookDiv.appendChild(cardTitle);
    bookDiv.appendChild(cardAuthor);
    bookDiv.appendChild(cardPage);
    bookDiv.appendChild(cardEdition);
    bookDiv.appendChild(cardRead);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteBtn);
    bookCard.appendChild(bookDiv);
  }
}

const getLocalStorage = () => {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

  if (myLibrary === null) {
    myLibrary = [];
  }
  showBooks();
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

getLocalStorage();