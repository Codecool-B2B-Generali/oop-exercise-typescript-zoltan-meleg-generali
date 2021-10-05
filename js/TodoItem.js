"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(name, description, state = false) {
        this.name = name;
        this.description = description;
        this.state = state;
    }
    toggleDone() {
        this.state = !this.state;
    }
}
exports.TodoItem = TodoItem;
