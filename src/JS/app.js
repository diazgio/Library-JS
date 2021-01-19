let myLibrary = [];
const form = document.querySelector('form');
const ftitle = document.getElementsByClassName('.f-title');
const fauthor = document.getElementsByClassName('.f-author');
const fpages = document.getElementsByClassName('.f-pages');
const fedition = document.getElementsByClassName('.f-edition');
const fsubmit = document.getElementsByClassName('.f-submit');

function Book(title,author,pages,edition){
  let id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
}

function showForm(){
  form.className = 'show';
}

function showBooks(){
  const bookCard = document.querySelector('.book-card');

  bookCard.innerHTML = '';

  for (let i = 0; i < this.myLibrary.length; i++) {
    // this.myLibrary[i];
    const cardTitle = document.createElement('div');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = myLibrary[i].title;

    const cardAuthor = document.createElement('div');
    cardAuthor.setAttribute('class', 'card-author');
    cardAuthor.innerText = myLibrary[i].author;

    const cardPage = document.createElement('div');
    cardPage.setAttribute('class', 'card-page');
    cardPage.innerText = myLibrary[i].pages;

    const cardEdition = document.createElement('div');
    cardEdition.setAttribute('class', 'card-edition');
    cardEdition.innerText = myLibrary[i].edition;

    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAuthor);
    bookCard.appendChild(cardPage);
    bookCard.appendChild(cardEdition);


  }
}

function addNewBooks(){
  if (ftitle.value === '' || fauthor.value === '' || fpages.value === '' || fedition.value === ''){
    alert('There are data missing, please check it.')
  } else {
    const book = new Book(ftitle.value,fauthor.value,fpages.value,fedition.value);
    myLibrary.push(book);
    showBooks();
  }
}