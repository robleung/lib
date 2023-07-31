let myLibrary = [];

let uuid = 0;

function Book(author, title, numPages, readStatus) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.readStatus = readStatus;
  this.id = uuid;
  uuid++;
}

function addBookToLibrary(author, title, numPages, readStatus) {
  myLibrary.push(new Book(author, title, numPages, readStatus));
}

function deleteBook(e) {
  let delId = e.target.parentElement.id;
  for (let i = 0; i < myLibrary.length; i++) {
    if (delId == myLibrary[i].id) myLibrary.splice(i, 1);
  }
  renderLibrary();
}

function updateStatus(e) {
  {
    let statusId = e.target.parentElement.id;
    for (let i = 0; i < myLibrary.length; i++) {
      if (statusId == myLibrary[i].id)
        myLibrary[i].readStatus = e.target.checked;
    }
  }
}

function renderLibrary() {
  let content = document.querySelector(".content");
  content.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("id", myLibrary[i].id);
    bookDiv.classList.add("book");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("book-title");
    titleDiv.innerText = myLibrary[i].title;
    bookDiv.appendChild(titleDiv);
    const authorDiv = document.createElement("div");
    authorDiv.classList.add("book-author");
    authorDiv.innerText = myLibrary[i].author;
    bookDiv.appendChild(authorDiv);
    const pagesDiv = document.createElement("div");
    pagesDiv.innerText = myLibrary[i].numPages + " pages";
    bookDiv.appendChild(pagesDiv);
    const readDiv = document.createElement("div");
    const readLabel = document.createElement("label");
    readLabel.innerText = "Read: ";
    readLabel.htmlFor = "book-read";
    readDiv.appendChild(readLabel);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = myLibrary[i].readStatus;
    checkbox.id = "book-read";
    checkbox.addEventListener("click", updateStatus);
    readDiv.appendChild(checkbox);
    bookDiv.appendChild(readDiv);
    const del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", deleteBook);
    bookDiv.append(del);

    content.appendChild(bookDiv);
  }
}
function addBook(event) {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input");
  const myObject = {};

  inputs.forEach((element) =>
    element.type != "checkbox"
      ? (myObject[element.name.split("-")[1]] = element.value)
      : (myObject[element.name.split("-")[1]] = element.checked)
  );
  console.log(myObject);
  addBookToLibrary(
    myObject["title"],
    myObject["author"],
    myObject["pages"],
    myObject["status"]
  );
  renderLibrary();
  form.reset();
  closePopup();
  event.preventDefault();
}

function openPopup() {
  let popup = document.querySelector(".popup");
  popup.classList.add("open-popup");
}
function closePopup() {
  let popup = document.querySelector(".popup");
  popup.classList.remove("open-popup");
}

addBookToLibrary("J. R. R. Tolkien", "The Hobbit", 304, true);
addBookToLibrary("E. B. White", "Charlotte's Web", 192, false);
renderLibrary();
