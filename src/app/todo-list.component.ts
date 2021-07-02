import { Component, EventEmitter, Input, Output } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <ng-template ngFor let-todot [ngForOf]="todoList">
        <app-todo-list-item [todoItem]="todot" (deleteEvent)="deleteTodoById($event)"></app-todo-list-item>
      </ng-template>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent {

  @Input() todoList: Todo[] = []
  @Output() todoToDeleteEvent = new EventEmitter<number>()

  deleteTodoById(todoIdToDelete: number): void {
    this.todoToDeleteEvent.emit(todoIdToDelete)
  }

}
