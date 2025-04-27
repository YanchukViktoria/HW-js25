import { log } from "./scriptsec.js";

let msg = log();
console.log(msg);

/* 1.Створіть "закладки" — список посилань на важливі сторінки.
  Додавайте,
  видаляйте 
  !та редагуйте 
  посилання в списку, 
  зберігайте його в localStorage, 
  щоб він залишався між сесіями.  */

/* 2.Форма збереження даних

Створіть просту форму з полями вводу і кнопкою, яка 
зберігає дані в localStorage. 
При наступному завантаженні сторінки зчитайте збережені дані з localStorage 
та відобразіть їх у відповідних полях вводу. */

let bookmarks = JSON.parse(localStorage.getItem("task")) || [];

let inpBookmark = document.querySelector("#bookmarkInput");
let btnBookmark = document.querySelector("#addBookmarkBtn");
let ulBookmark = document.querySelector("#bookmarkList");

function addBookmark() {
  if (inpBookmark.value == "") {
    return
  }
  let li = document.createElement("li");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.classList.add("deleteBtn");
  btn.innerHTML = "delete";
  p.innerHTML = inpBookmark.value;
  li.appendChild(p);
  li.append(btn);
  ulBookmark.appendChild(li);

  bookmarks.push(inpBookmark.value);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

btnBookmark.addEventListener("click", addBookmark);
ulBookmark.addEventListener("click", (e)=> {
  if(e.target.tagName == "BUTTON"){
    const bookmarkValue = e.target.parentElement.firstChild.textContent;
    bookmarks = bookmarks.filter((bookmark) => bookmark !== bookmarkValue)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    e.target.parentElement.remove();
  }
});

///

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

let inpContactsName = document.querySelector("#username");
let inpContactsPsw = document.querySelector("#password");
let btnContacts = document.querySelector("#saveBtn");

function assContact() {
  const newContact = {
    name: inpContactsName.value,
    passwoed: inpContactsPsw.value,
};
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

btnContacts.addEventListener("click", assContact);

document.addEventListener("DOMContentLoaded", () => {
  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  inpContactsName.value = contacts[0].name;
  inpContactsPsw.value = contacts[0].passowr;
});