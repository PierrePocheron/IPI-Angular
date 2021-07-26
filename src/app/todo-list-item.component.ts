import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todo-list-item',
  template: `
    <mat-list-item>{{todoItem.todo}} <button mat-raised-button color="accent" (click)="deleteThisTodo()">SUPPRIMER</button> </mat-list-item>
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
