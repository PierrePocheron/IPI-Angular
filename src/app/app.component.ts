import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-create-todo (todoToAdd)="addTodo($event)"></app-create-todo>
  <app-todo-list [todoList]="todos"></app-todo-list>
  <button (click)="dumpTodoList()">Vider</button>
  `,
  styles: ['']
})
export class AppComponent {
  title: string = 'demo';
  todos: string[] = [

  ]
  
  addTodo(todoToAdd: string): void {
    this.todos.push(todoToAdd)
  }

  dumpTodoList(): void {
    this.todos = []
  }
}


