import { Component } from '@angular/core';
import Todo from './todo';
@Component({
  selector: 'app-root',
  template: `
  <app-create-todo (todoToAdd)="addTodo($event)"></app-create-todo>
  <app-todo-list [todoList]="todos" (todoToDeleteEvent)="deleteTodoById($event)"></app-todo-list>
  <button (click)="dumpTodoList()">Vider</button>
  `,
  styles: ['']
})
export class AppComponent {
  title: string = 'demo';
  todos: Todo[] = [

  ]
  
  addTodo(todoToAdd: string): void {
    let todoCreated: Todo = {
      id: Math.random(),
      todo: todoToAdd
    }
    this.todos.push(todoCreated)
  }

  dumpTodoList(): void {
    this.todos = []
  }

  deleteTodoById(todoIdToDelete: number): void {
    this.todos = this.todos.filter(t => t.id !== todoIdToDelete)
  }
}


