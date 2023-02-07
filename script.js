const main = document.querySelector("main");
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const log = document.getElementById("log");

let myLibrary = [];

form.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(event) {
  event.preventDefault();

  let form = document.getElementById("form");
  let bookName = form.elements[0].value;
  let bookAuthor = form.elements[1].value;
  let pagesNumber = form.elements[2].value;
  let isRead = form.elements[3].checked;

  let newBook = {
    name: bookName,
    author: bookAuthor,
    pages: pagesNumber,
    read: isRead,
  };

  myLibrary.push(newBook);

  let table = document.getElementById("booksTable");
  let row = table.insertRow();

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = bookName;
  cell2.innerHTML = bookAuthor;
  cell3.innerHTML = pagesNumber;
  cell4.innerHTML = isRead;
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}

addBookButton.addEventListener("click", function () {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
});
