let myLibrary = [];
const form = document.querySelector('form');
const ftitle = document.querySelector('.f-title');
const fauthor = document.querySelector('.f-author');
const fpages = document.querySelector('.f-pages');
const fedition = document.querySelector('.f-edition');
const fread = document.querySelector('.f-read');
const fsubmit = document.querySelector('.f-submit');
const bookCard = document.querySelector('.book-card');

function Book(title,author,pages,edition,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.read = !read;
}

function showForm(){
  form.className = 'show';
}

function addNewBooks(){
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === ''){
    alert('There are data missing, please check it.')
  } else {
    const book = new Book(ftitle.value,fauthor.value,fpages.value,fedition.value, fread);
    myLibrary.push(book);
    updateLocalStorage();
  }
}

function updateLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function getLocalStorage() {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));

    if (myLibrary === null) {
      myLibrary = [];
    }
    showBooks();
}

function showBooks(){
  for (let i = 0; i < myLibrary.length; i++) {

    let m = readContent(i);
    
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
    readButton.innerHTML = 'Change Status';
    readButton.setAttribute('onclick', `readStatus(${i})`);

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPage);
    bookCard.appendChild(cardEdition);
    bookCard.appendChild(cardRead);
    bookCard.appendChild(readButton);
  }
}

function readStatus(s) {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary[s].read = !myLibrary[s].read;
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function readContent(s) {
  let status;
  if (myLibrary[s].read == true) {
    status = 'Read';
  } else {
    status = 'Not Read';
  }
  return status;
}

getLocalStorage();