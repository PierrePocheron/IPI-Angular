import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  template: `
   <input type='text' [(ngModel)]="todo" />
   <button (click)="addTodo()">Creer</button>
   
  `,
  styles: [
  ]
})
export class CreateTodoComponent {
  todo: string = ""
  
  @Output() todoToAdd = new EventEmitter<string>();

  addTodo(): void {
    this.todoToAdd.emit(this.todo)
    this.todo = "";
  }
}
