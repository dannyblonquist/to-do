const listContainer = document.getElementById("list-container");
const form = document.getElementById("form-id");
const inputElement = document.getElementById("input-text");
let currentDeleteId = 0;

//find our list [x]
//get text in our text box [x]
//create an element and add text from textbox inside our element
//append our element to the DOM
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputElement.value;
  const newTask = document.createElement("li");
  newTask.setAttribute("id", `delete-${currentDeleteId}`);
  newTask.innerHTML = inputValue;
  const checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  newTask.appendChild(checkbox);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => deleteItem(newTask.id));
  newTask.appendChild(deleteBtn);
  listContainer.appendChild(newTask);
  inputElement.value = "";
  currentDeleteId++;
});

const deleteItem = (id) => {
  const itemToRemove = document.getElementById(id);
  listContainer.removeChild(itemToRemove);
};

// const strikeThrough =
// listItem.addEventListener("click", () => {
//   listItem.listContainer.toggle("done");
// });
