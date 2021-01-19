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
    this.myLibrary[i];
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