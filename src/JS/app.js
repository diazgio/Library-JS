let myLibrary = [];
const form = document.querySelector('form');
const ftitle = document.querySelector('.f-title');
const fauthor = document.querySelector('.f-author');
const fpages = document.querySelector('.f-pages');
const fedition = document.querySelector('.f-edition');
const fsubmit = document.querySelector('.f-submit');
const bookCard = document.querySelector('.book-card');

function Book(title,author,pages,edition){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
}

const book1 = new Book('Harry Potter','JK. Rowling','500','First Edition');
const book2 = new Book('Apocalips','Giordano','800','Third Edition');
myLibrary.push(book1);
myLibrary.push(book2);

function showForm(){
  form.className = 'show';
}

function addNewBooks(){
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === ''){
    alert('There are data missing, please check it.')
  } else {
    const book = new Book(ftitle.value,fauthor.value,fpages.value,fedition.value);
    updateLocalStorage(book);
    showBooks();
  }
}

function updateLocalStorage(book) {
  if (book){
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    myLibrary.push(book);
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  }
}

function getLocalStorage() {
  if (localStorage.getItem('myLibrary')) {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  } else {
    myLibrary = [];
  }
}



function showBooks(){
  getLocalStorage();
  
  bookCard.innerHTML = '';
  
  for (let i = 0; i < myLibrary.length; i++) {
    
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

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPage);
    bookCard.appendChild(cardEdition);
  }
  
}

showBooks();
console.log(myLibrary);