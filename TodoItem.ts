import { iTodo } from "./iTodo";

export class TodoItem implements iTodo {
  name: string;
  description: string;
  state: boolean;

  constructor(name: string, description: string, state: boolean = false) {
    this.name = name;
    this.description = description;
    this.state = state;
  }

  toggleDone() {
    this.state = !this.state;
  }
}
