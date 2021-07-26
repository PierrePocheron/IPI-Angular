import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todo-list-item',
  template: `
    <mat-list-item>
      <div class="col-2">
        {{todoItem.todo}}
      </div>
      <div class="col-3">
        <button mat-raised-button color="accent" (click)="deleteThisTodo()">SUPPRIMER</button>
      </div>
    </mat-list-item>
  `,
  styles: [
  ]
})
export class TodoListItemComponent {

  @Input() todoItem!: Todo
  @Output() deleteEvent = new EventEmitter<number>()

  deleteThisTodo() {
    this.deleteEvent.emit(this.todoItem.id)
  }
}
