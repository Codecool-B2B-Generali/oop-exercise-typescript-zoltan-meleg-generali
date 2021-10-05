define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TodoItem = void 0;
    var TodoItem = /** @class */ (function () {
        function TodoItem(name, description, state) {
            if (state === void 0) { state = false; }
            this.name = name;
            this.description = description;
            this.state = state;
        }
        TodoItem.prototype.toggleDone = function () {
            this.state = !this.state;
        };
        return TodoItem;
    }());
    exports.TodoItem = TodoItem;
});
