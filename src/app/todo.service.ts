import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos : BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  public todos = this._todos.asObservable()

  constructor() { }

  addTodo(name: string) {
    let todo: Todo = {
      id: Math.random(),
      todo: name,
    }
    this._todos.getValue().push(todo)
    this._todos.next(this._todos.getValue())
  }

  deleteTodo(id: number) {
    let newTodoList: Todo[] = this._todos.getValue().filter((todo: Todo) => id !== todo.id)
    this._todos.next(newTodoList)
  }

  dumpTodo() {
    this._todos.next([])
  }
}
