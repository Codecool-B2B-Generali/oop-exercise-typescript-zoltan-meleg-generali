define(["require", "exports", "./Todo"], function (require, exports, Todo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var todo = new Todo_1.Todo();
    window.onload = function () {
        var name = document.getElementById("todoName");
        var description = document.getElementById("todoDescription");
        var button = document.getElementById("addTodo");
        button.addEventListener("click", function () {
            addNewTodo(name.value, description.value);
        });
    };
    function addNewTodo(todoName, todoDescription) {
        if (todoName != "" && todoDescription != "") {
            todo.addItem(todoName, todoDescription);
            listTodos();
        }
    }
    function listTodos() {
        var todoDiv = document.getElementById("todoDiv");
        var todoList = '<ul class="list-group">';
        var allTodos = todo.listItems();
        for (var index = 0; index < allTodos.length; index++) {
            todoList += '<li class="list-group-item">';
            todoList +=
                '<input class="form-check-input me-1" type="checkbox" value="" aria-label="check">';
            todoList += allTodos[index].name + "  " + allTodos[index].description;
            todoList += "</li>";
        }
        todoList += "</ul>";
        todoDiv.innerHTML = todoList;
    }
});
