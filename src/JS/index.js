const root = document.querySelector('#root');


const header = document.createElement('div');
header.setAttribute('class','heading');
const word = document.createElement('h1');
word.textContent = 'Welcome to Big Library';
const btn = document.createElement('button');
btn.setAttribute('type', 'button');
btn.setAttribute('class', 'Add-button');
btn.setAttribute('onclick', showForm);

header.appendChild(word);
header.appendChild(btn);
root.appendChild(header);

const showForm = () => {

  const formDiv = document.createElement('div');
  formDiv.setAttribute('class', 'form-container');

  const form = document.createElement('form');
  form.setAttribute('class', 'init');
  form.setAttribute('action', 'post');

  const title = document.createElement('div');
  const ftitle = document.createElement('input');
  ftitle.setAttribute('type', 'text');
  ftitle.setAttribute('name', 'title');
  ftitle.setAttribute('placeholder', 'title');

  title.appendChild(ftitle);
  form.appendChild(title);


  const author = document.createElement('div');
  const fauthor = document.createElement('input');
  fauthor.setAttribute('type', 'text');
  fauthor.setAttribute('name', 'author');
  fauthor.setAttribute('placeholder', 'author');

  author.appendChild(fauthor);
  form.appendChild(author);

  const pages = document.createElement('div');
  const fpages = document.createElement('input');
  fpages.setAttribute('type', 'text');
  fpages.setAttribute('name', 'pages');
  fpages.setAttribute('placeholder', 'pages');

  pages.appendChild(fpages);
  form.appendChild(pages);

  const edition = document.createElement('div');
  const fedition = document.createElement('input');
  fedition.setAttribute('type', 'text');
  fedition.setAttribute('name', 'edition');
  fedition.setAttribute('placeholder', 'edition');

  edition.appendChild(fedition);
  form.appendChild(edition);

  const read = document.createElement('div');
  const fread = document.createElement('input');
  fread.setAttribute('type', 'checkbox');
  fread.setAttribute('name', 'read');
  fread.setAttribute('placeholder', 'read');

  read.appendChild(fread);
  form.appendChild(read);

  const send = document.createElement("input"); 
  send.setAttribute("type", "submit"); 
  send.setAttribute("value", "Submit");

  form.appendChild(send);
}

