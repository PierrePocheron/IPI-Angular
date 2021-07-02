import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
