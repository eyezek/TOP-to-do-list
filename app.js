let lists = [];
const newList = document.getElementById("newlist");
modal = document.getElementById("modal");
submit = document.getElementById("submitbtn");
title = document.getElementById("title");
description = document.getElementById("description");
dueDate = document.getElementById("duedate");
priority = document.getElementById("priority");

const toDoFactory = function (title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  return { title, description, dueDate, priority };
};

newList.addEventListener("click", function () {
  modal.style.display = "block";
});

function displayToDos() {
  for (let i = 0; i < lists.length; i++) {
    const newToDoDisplay = document.createElement("div");
    newToDoDisplay.classList.add(".lists");
    document.querySelector(".lists").appendChild(newToDoDisplay);
    newTitleDisplay = document.createElement("h2");
    newTitleDisplay.innerHTML = document.getElementById("title").value;
    newToDoDisplay.appendChild(newTitleDisplay);
  }
}

submit.addEventListener("click", function getToDo(event) {
  event.preventDefault();
  const newToDo = toDoFactory(
    (this.title = document.getElementById("title").value),
    (this.description = document.getElementById("description").value),
    (this.dueDate = document.getElementById("duedate").value),
    (this.priority = document.getElementById("priority").value)
  );
  lists.push(newToDo);
  displayToDos(lists);
});
