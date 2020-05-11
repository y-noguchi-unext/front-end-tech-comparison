import { Component } from '@angular/core';
import { ITodo } from './ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular';
  todoList: Array<ITodo> = [
    {
      id: 0,
      title: "牛乳を買う",
      completed: false,
      deleted: false
    },
    {
      id: 1,
      title: "牛乳をコップに入れる",
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: "牛乳を飲む",
      completed: false,
      deleted: false
    }
  ];

  filterdTodo = this.todoList.filter(todo => !todo.deleted);
}
