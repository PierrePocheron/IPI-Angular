import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  template: `
   <mat-form-field appearance="standard">
    <mat-label>Your todo</mat-label>
    <input matInput matNativeControl [(ngModel)]="todo" />
   </mat-form-field>
   <button mat-raised-button color="primary" (click)="addTodo()">Creer</button>
   
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
