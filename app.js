let listsArray = [];
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
  for (let i = 0; i < listsArray.length; i++) {
    const list = document.createElement("div");
    list.classList.add("lists");
    document.getElementById("listscontainer").appendChild(list);
    const newTitleDisplay = document.createElement("h2");
    newTitleDisplay.classList.add("titledisplay");
    newTitleDisplay.innerHTML = document.getElementById("title").value;
    const newDescriptionDisplay = document.createElement("h3");
    newDescriptionDisplay.classList.add("descriptiondisplay");
    newDescriptionDisplay.innerHTML =
      document.getElementById("description").value;
    const newDueDateDisplay = document.createElement("h3");
    newDueDateDisplay.classList.add("duedatedisplay");
    newDueDateDisplay.innerHTML = document.getElementById("duedate").value;
    const newPriorityDisplay = document.createElement("h3");
    newPriorityDisplay.classList.add("duedatedisplay");
    newPriorityDisplay.innerHTML = document.getElementById("priority").value;
    list.appendChild(newTitleDisplay);
    list.appendChild(newDescriptionDisplay);
    list.appendChild(newDueDateDisplay);
    list.appendChild(newPriorityDisplay);
  }
}

function clearToDoDisplay() {
  document.getElementById("listscontainer").replaceChildren();
}

submit.addEventListener("click", function getToDo(event) {
  event.preventDefault();
  const newToDo = toDoFactory(
    (this.title = document.getElementById("title").value),
    (this.description = document.getElementById("description").value),
    (this.dueDate = document.getElementById("duedate").value),
    (this.priority = document.getElementById("priority").value)
  );
  listsArray.push(newToDo);
  clearToDoDisplay();
  displayToDos(listsArray);
  modal.style.display = "none";
});
