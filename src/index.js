document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  document.getElementById("list").innerText = msg;
});
