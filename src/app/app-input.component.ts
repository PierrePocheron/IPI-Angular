import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-app-input',
  template: `
    <input type="text" id="inputVal" (input)="onChangeMessageOnInput(inputVal.value)" value="{{message}}" #inputVal/>
    <p>Message : {{message}}</p>
  `,
  styles: [
  ]
})
export class AppInputComponent {

  message: string = ""

  messageService: MessageService

  constructor(_messageService: MessageService) {
    this.messageService = _messageService
    
    this.messageService.message.subscribe((val) => {
      this.message = val
    })
  }

  onChangeMessageOnInput(messageChange: string): void {
    this.messageService.broadcastChangeMessage(messageChange)
  }
}



