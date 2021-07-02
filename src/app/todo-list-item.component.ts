import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from './todo';

@Component({
  selector: 'app-todo-list-item',
  template: `
    <li>{{todoItem.todo}} <button (click)="deleteThisTodo()">SUPPRIMER</button> </li>
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
