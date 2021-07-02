import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _message: Subject<string> = new BehaviorSubject("")

  public message = this._message.asObservable()

  broadcastChangeMessage(newMessage: string): void {
    this._message.next(newMessage)
  }
}
