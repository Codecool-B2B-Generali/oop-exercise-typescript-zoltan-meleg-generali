import { TodoItem } from "./TodoItem";

export class Todo {
  private static todoItems: TodoItem[] = new Array();

  addItem(name: string, description: string) {
    Todo.todoItems.push(new TodoItem(name, description));
  }

  listItems(): TodoItem[] {
    return Todo.todoItems;
  }
}
