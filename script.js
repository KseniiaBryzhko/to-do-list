const button = document.querySelector(".input-container button");
const input = document.querySelector(".input-container input");
const list = document.querySelector(".todo-list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-list-item";
  const deleteBtn = document.createElement("button");
  li.innerText = input.value;
  deleteBtn.innerText = "Delete";
  list.appendChild(li);
  li.appendChild(deleteBtn);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
});
