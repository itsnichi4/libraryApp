const main = document.querySelector("main");
const addBookButton = document.getElementById("addBook");
const form = document.getElementById("form");
const log = document.getElementById("log");

main.style.display = "none";

let myLibrary = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!inputValidation()) {
    return false;
  }

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
  let cell6 = row.insertCell(5);
  cell1.innerHTML = bookName;
  cell2.innerHTML = bookAuthor;
  cell3.innerHTML = pagesNumber;

  if (isRead) {
    cell4.innerHTML = "Read";
  } else {
    cell4.innerHTML = "Not read";
  }

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = isRead;
  cell6.appendChild(checkbox);
  
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      cell4.innerHTML = "Read";
    } else {
      cell4.innerHTML = "Not Read";
    }
  });
  

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.setAttribute("data-index", myLibrary.length - 1);
  removeButton.addEventListener("click", function () {
    removeBook(this.getAttribute("data-index"));
  });
  cell5.appendChild(removeButton);
});

function removeBook(index) {
  let table = document.getElementById("booksTable");
  table.deleteRow(index + 1);
  myLibrary.splice(index, 1);

  let removeButtons = document.querySelectorAll("button[data-index]");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].setAttribute("data-index", i);
  }
}

addBookButton.addEventListener("click", function () {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
});

function inputValidation() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  if (input1 === null || input1 === "") {
    return alert("Please enter something in Book Name field");
  }

  if (!/^[a-zA-Z]+$/.test(input2)) {
    alert("Please use only letters in the 'Book Author' field");
    return false;
  }

  if (!/^\d+$/.test(input3)) {
    alert("Please use numbers only in the 'Pages' field");
    return false;
  }

  return true;
}
