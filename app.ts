import { Todo } from "./Todo";

const todo = new Todo();

window.onload = () => {
  const name = document.getElementById("todoName") as HTMLInputElement;
  const description = document.getElementById(
    "todoDescription"
  ) as HTMLInputElement;
  const button = document.getElementById("addTodo") as HTMLElement;
  button.addEventListener("click", () => {
    addNewTodo(name.value, description.value);
  });
};

function addNewTodo(todoName: string, todoDescription: string) {
  if (todoName != "" && todoDescription != "") {
    todo.addItem(todoName, todoDescription);
    listTodos();
  }
}

function listTodos() {
  const todoDiv = document.getElementById("todoDiv") as HTMLElement;
  let todoList: string = '<ul class="list-group">';
  let allTodos = todo.listItems();
  for (let index = 0; index < allTodos.length; index++) {
    todoList += '<li class="list-group-item">';
    todoList +=
      '<input class="form-check-input me-1" type="checkbox" value="" aria-label="check">';
    todoList += allTodos[index].name + "  " + allTodos[index].description;
    todoList += "</li>";
  }
  todoList += "</ul>";
  todoDiv.innerHTML = todoList;
}
