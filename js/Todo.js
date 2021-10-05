"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const TodoItem_1 = require("./TodoItem");
class Todo {
    addItem(name, description) {
        Todo.todoItems.push(new TodoItem_1.TodoItem(name, description));
    }
    listItems() {
        return Todo.todoItems;
    }
}
exports.Todo = Todo;
Todo.todoItems = new Array();
