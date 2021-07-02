import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-input',
  template: `
    <input type="text" id="inputVal" value="{{inputOld}}" (input)="inputNew.emit(inputVal.value)" #inputVal/>
    <p>Message : {{inputOld}}</p>
  `,
  styles: [
  ]
})
export class AppInputComponent {
  @Input() inputOld: string = ""
  @Output() inputNew = new EventEmitter<string>();
}

