function content() {
  const root = document.querySelector('#root');
  const header = document.createElement('div');
  header.setAttribute('class', 'header');
  
  const titledo = document.createElement('h1');
  titledo.innerHTML = 'Welcome to The Big Library';
  
  const main = document.createElement('div');
  main.className = 'form-container';
  
  const addBtn = document.createElement('button');
  addBtn.className = 'Add-button';
  addBtn.innerText = 'Add a New Book';
  addBtn.setAttribute('type', 'button');
  
  const formin = document.createElement('form');
  formin.className = 'init'
  
  const tlabel = document.createElement('label');
  tlabel.className = 'tlabel';
  tlabel.innerHTML = 'Title';
  
  const tinput = document.createElement('input');
  tinput.className = 'f-title';
  tinput.setAttribute('type', 'text');
  tinput.setAttribute('placeholder', 'Write Title');
  
  const alabel = document.createElement('label');
  alabel.className = 'alabel';
  alabel.innerHTML = 'Author';

  const ainput = document.createElement('input');
  ainput.className = 'f-author';
  ainput.setAttribute('type', 'text');
  ainput.setAttribute('placeholder', 'Write Author');

  const plabel = document.createElement('label');
  plabel.className = 'plabel';
  plabel.innerHTML = 'Number of Pages';

  const pinput = document.createElement('input');
  pinput.className = 'f-pages';
  pinput.setAttribute('type', 'text');
  pinput.setAttribute('placeholder', 'Write Number of pages');

  const elabel = document.createElement('label');
  elabel.className = 'plabel';
  elabel.innerHTML = 'Edition';

  const einput = document.createElement('input');
  einput.className = 'f-edition';
  einput.setAttribute('type', 'text');
  einput.setAttribute('placeholder', 'Write the Edition');

  const rlabel = document.createElement('label');
  rlabel.className = 'rlabel';
  rlabel.innerHTML = 'Edition';

  const sendBtn = document.createElement('button');
  sendBtn.className = 'f-submit';
  sendBtn.innerText = 'Submit';
  sendBtn.setAttribute('type', 'submit');

  const bookCards = document.createElement('div');
  bookCards.className = 'book-card';
  
  root.appendChild(header);
  header.appendChild(titledo);
  root.appendChild(main);
  main.appendChild(addBtn);
  main.appendChild(formin);
  formin.appendChild(tlabel);
  formin.appendChild(tinput);
  formin.appendChild(alabel);
  formin.appendChild(ainput);
  formin.appendChild(plabel);
  formin.appendChild(pinput);
  formin.appendChild(elabel);
  formin.appendChild(einput);
  formin.appendChild(sendBtn);
  main.appendChild(bookCards);
}

const showBooks = (book) => {
  const bookCard = document.querySelector('.book-card');

  const bookDiv = document.createElement('div');
  bookDiv.className = 'book-item';
  bookDiv.setAttribute('id','id');
  book.id += 1;
  
  const cardTitle = document.createElement('h2');
  cardTitle.setAttribute('class', 'card-title');
  cardTitle.innerHTML = `${book.title}`;

  const cardAuthor = document.createElement('h3');
  cardAuthor.setAttribute('class', 'card-author');
  cardAuthor.innerHTML = `Author: ${book.author}`;

  const cardPage = document.createElement('p');
  cardPage.setAttribute('class', 'card-page');
  cardPage.innerHTML = `Number of pages: ${book.pages}`;

  const cardEdition = document.createElement('p');
  cardEdition.setAttribute('class', 'card-edition');
  cardEdition.innerHTML = `Edition: ${book.edition}`;

  const cardRead = document.createElement('p');
  cardRead.setAttribute('class', 'card-read');
  cardRead.innerHTML = '';

  const readButton = document.createElement('button');
  readButton.className = 'read-btn';
  readButton.innerHTML = `${book.read ? 'Read' : 'Unread'}`;
  readButton.setAttribute('onclick', `readStatus(${book.id})`);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('onclick', `deleteBook(${book.id})`);

  bookDiv.appendChild(cardTitle);
  bookDiv.appendChild(cardAuthor);
  bookDiv.appendChild(cardPage);
  bookDiv.appendChild(cardEdition);
  bookDiv.appendChild(cardRead);
  bookDiv.appendChild(readButton);
  bookDiv.appendChild(deleteBtn);
  bookCard.appendChild(bookDiv);

}

export { content, showBooks };
