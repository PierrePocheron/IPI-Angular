import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  template: `
    <mat-list>
      <ng-template ngFor let-todot [ngForOf]="todoList">
        <app-todo-list-item [todoItem]="todot" (deleteEvent)="deleteTodoById($event)"></app-todo-list-item>
      </ng-template>
    </mat-list>
  `,
  styles: [
  ]
})
export class TodoListComponent {
    todoService: TodoService

    todoList!: Todo[]
    
    constructor(_todoService: TodoService) {
      this.todoService = _todoService

      this.todoService.todos.subscribe(newTodos => this.todoList = newTodos)
    }
    deleteTodoById(id: number): void {
      this.todoService.deleteTodo(id)
    }
}
