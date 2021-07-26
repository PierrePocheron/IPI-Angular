import { Component } from '@angular/core';
import Todo from './todo';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-create-todo (todoToAdd)="addTodo($event)"></app-create-todo>
    <app-todo-list></app-todo-list>
    <button mat-raised-button color="warn" (click)="dumpTodoList()">Vider</button>
  </div>
  `,
  styles: ['']
})
export class AppComponent {
  title: string = 'demo';

  todoService: TodoService
  
  constructor(_todoService: TodoService) {
    this.todoService = _todoService
  }

  dumpTodoList(): void {
    this.todoService.dumpTodo()
  }

  addTodo(name: string): void {
    this.todoService.addTodo(name)
  }
}


