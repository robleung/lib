let myLibrary = [];

let id = 0;

function Book(author, title, numPages, readStatus) {
  // the constructor...
  //   : author, title, number of pages, whether it’s been read and anyt
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.readStatus = readStatus;
}

function addBookToLibrary(author, title, numPages, readStatus) {
  // do stuff here
  // pull out data from popup form
  // call book constructor
  // push to myLibrary array
  myLibrary.push(new Book(author, title, numPages, readStatus));
}

function renderLibrary() {
  let content = document.querySelector(".content");
  for (let i = 0; i < myLibrary.length; i++) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    const titleDiv = document.createElement("div");
    titleDiv.innerText = myLibrary[i].title;
    bookDiv.appendChild(titleDiv);
    const authorDiv = document.createElement("div");
    authorDiv.innerText = myLibrary[i].author;
    bookDiv.appendChild(authorDiv);
    const pagesDiv = document.createElement("div");
    pagesDiv.innerText = myLibrary[i].numPages;
    bookDiv.appendChild(pagesDiv);
    const readDiv = document.createElement("div");
    readDiv.innerText = myLibrary[i].readStatus;
    bookDiv.appendChild(readDiv);
    content.appendChild(bookDiv);
  }
}

addBookToLibrary("J. R. R. Tolkien", "The Hobbit", 304, true);
addBookToLibrary("E. B. White", "Charlotte's Web", 192, false);
renderLibrary();
