import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todoList">
        {{todo}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class TodoListComponent {

  @Input() todoList: string[] = []

}
