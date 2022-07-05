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
    document.getElementById("lists").appendChild(list);
    const deleteContainer = document.createElement("div");
    deleteContainer.classList.add("deletecontainer");
    const deleteButton = document.createElement("h2");
    deleteButton.innerHTML = "delete to-do";
    deleteButton.classList.add("deletebutton");
    const newTitleDisplay = document.createElement("h2");
    newTitleDisplay.classList.add("titledisplay");
    newTitleDisplay.innerHTML = listsArray[i].title;
    const newDescriptionDisplay = document.createElement("h3");
    newDescriptionDisplay.classList.add("descriptiondisplay");
    newDescriptionDisplay.innerHTML = listsArray[i].description;
    const newDueDateDisplay = document.createElement("h3");
    newDueDateDisplay.classList.add("duedatedisplay");
    newDueDateDisplay.innerHTML = listsArray[i].dueDate;
    const newPriorityDisplay = document.createElement("h3");
    newPriorityDisplay.classList.add("prioritydisplay");
    newPriorityDisplay.innerHTML = listsArray[i].priority;
    list.appendChild(newTitleDisplay);
    list.appendChild(newDescriptionDisplay);
    list.appendChild(newDueDateDisplay);
    list.appendChild(newPriorityDisplay);
    list.appendChild(deleteContainer);
    deleteContainer.appendChild(deleteButton);
  }
}

deleteContainer = document.getElementsByClassName("deletecontainer");

lists = document.getElementsByClassName("lists");

function showToDoDelete() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("mouseover", function () {
      deleteContainer[i].style.visibility = "visible";
    });
    lists[i].addEventListener("mouseout", function () {
      deleteContainer[i].style.visibility = "hidden";
    });
  }
}

function deleteToDo(event) {
  for (let i = 0; i > deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function () {
      event.target.innerHTML = "";
    });
  }
}

function clearToDoDisplay() {
  document.getElementById("lists").replaceChildren();
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
  showToDoDelete();
});
