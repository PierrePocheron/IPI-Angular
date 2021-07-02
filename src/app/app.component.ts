import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Exercice 1 - Hello world</h1>
  <h2>Exercice 2 - 3</h2>
  <app-app-input [inputOld]="inputValue" (inputNew)="inputValue = $event"></app-app-input>
  <app-app-input [inputOld]="inputValue" (inputNew)="inputValue = $event"></app-app-input>
  `,
  styles: []
})
export class AppComponent {
  inputValue: string = "";
}
