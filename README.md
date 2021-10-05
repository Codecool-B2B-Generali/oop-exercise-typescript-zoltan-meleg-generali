# OOP exercise

## Story

During your next week you'll get materials about Programming in JavaScript and assignment to practice it. However, we encourage you to do your research about basic OOP concepts, like classes, instances, methods, access modifiers, getters and setters. It would be worth reading about static methods and when it's worth using them and when you shouldn't use them.
If you have already found some info on those topics, you can try out implementing some small problems using OOP. One thing common to all following tasks is to separate your classes from the Main class that will be used just to start your program and create objects of your classes.

This is a task that you should focus on and you shouldn't go further before finishing it. Imagine a simple todo list that can contain many items. Follow given specification.

## What are you going to learn?

- TypeScript programming language
- How transpilation works
- OOP basics
- Classes
- Access modifiers
- Type hinting
- Clean code

## Tasks

1. Interfaces fill the role of naming types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
    - Create `iTodo` interface in itodo.ts file:

`interface iTodo{
    name:string;
    description: string;
    state: boolean;
}`

Rember to export it.

2. Create following classes in separate .ts files `Todo`, `TodoItem`.
    - `TodoItem` class contains attributes about TODO item:
- `name`
- `state`
This class should contain following methods:
- `toggleDone()`
    - `TodoItem` class should implement `iTodo` interface.
    - `Todo` class should contain private field - list of TodoItem objects.
- private static items: TodoItem[]= new Array;

Add following methods:
- `addItem` - add new item to list
- `removeItem` - remove item form list
- `listItems` - list all items with their state (done/undone)
    - Implement constructor for both classes. `TodoItem` should initialize name, description and state.
Please consider two ways of implementing constructor:


`constructor(name:string, description:string, state:boolean){
    this.name = name;
    this.description = description;
    this.state = state;
}`

And second:

`constructor(public name: string,
                 public description: string,
                 public state: boolean){}`

Consider to use first example (`state` should have default value as false).
    - Because `items` is a private static field, write method for getting its value.
    - Because `items` is a private static field, write method for adding new TodoItem object to it.

3. Create main file, which will create new `Todo` item object, and will have event to create new tasks as `TodoItem` objects.
    - Create basic form with name and descriptions input fields only. State should be marked, on displayed todo items list below the form.
    - Assign event to button for adding new todo item. Remember to use strict mode (which you can set in tsconfig file),
to ensure that you name the type of retrived element from `querySelector` method. Use type casting:
`const button = document.querySelector('button') as HTMLElement;`
or typing inside angle brackets:
`document.querySelector<HTMLElement>('button')`.
    - Display all the task in the list below, add checkbox to mark items status, where true is completed, and false
is default value.

4. Generate CSS style
    - You can use bootstrap to style app, or write your own style.

## General requirements

- Generated git repository should contain only `readme.md` file. Base on `Setup TypeScript` project please
create project structure consisting with `index.html`, `app.ts`, `todo.ts`, `todoitem.ts`, `itodo.ts` and
`style.css`.
Start with command `npm init` to generate `package.json`. Also remember to create tsconfig by `tsc --init`
command and set stric mode.

## Hints

To reduce code complexity, please move classes to separate files. Use the concept of modules with `export class`.
You could think about some more advanced features if you want to practice more.

## Background materials

- <i class="far fa-candy-cane"></i> [TypeScript Tutorial](https://www.typescripttutorial.net/)
- <i class="far fa-exclamation"></i> [TypeScript — Object Oriented Programming](https://rambabupadimi.medium.com/typescript-object-oriented-programming-7a6fd905d90e)
- <i class="far fa-exclamation"></i> [Modules in TypeScript](https://www.typescriptlang.org/docs/handbook/modules.html)
- <i class="far fa-exclamation"></i> [TypeScript Getters and Setters](https://www.typescripttutorial.net/typescript-tutorial/typescript-getters-setters/)
- <i class="far fa-open-book"></i> [Introduction to 'class' data type and Object-Oriented Programming paradigm in TypeScript](https://medium.com/jspoint/typescript-classes-65b4712ac9c8)
- [DOM Manipulation - typing with TypeScript](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
- [Clean DOM queries in Typescript](https://medium.com/@mindplay/clean-dom-queries-in-typescript-c10f362d14fc)
