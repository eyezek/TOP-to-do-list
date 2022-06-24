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

submit.addEventListener("click", function () {
  toDoFactory(title.value, description.value, dueDate.value, priority.value);
});
