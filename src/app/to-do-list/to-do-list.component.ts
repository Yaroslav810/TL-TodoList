import { Component, OnInit } from '@angular/core';

class TodoItem {
  name: string;
  done: boolean;

  constructor(name: string) {
    this.name = name;
    this.done = false;
  }
}

@Component({
  selector: 'app-to-do-list', 
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  constructor() { }

  newTodo = ''
  todos: TodoItem[] = []

  addTodoHandler(): void {
    this.todos.push(
      new TodoItem(this.newTodo)
    );
    this.newTodo = '';
  }

  ngOnInit(): void {
    
  }
}
