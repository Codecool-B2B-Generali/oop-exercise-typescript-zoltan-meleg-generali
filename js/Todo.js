define(["require", "exports", "./TodoItem"], function (require, exports, TodoItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Todo = void 0;
    var Todo = /** @class */ (function () {
        function Todo() {
        }
        Todo.prototype.addItem = function (name, description) {
            Todo.todoItems.push(new TodoItem_1.TodoItem(name, description));
        };
        Todo.prototype.listItems = function () {
            return Todo.todoItems;
        };
        Todo.todoItems = new Array();
        return Todo;
    }());
    exports.Todo = Todo;
});
