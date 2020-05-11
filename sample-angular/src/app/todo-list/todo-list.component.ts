import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../ITodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: ITodo[];
  constructor() { }

  ngOnInit(): void {
  }
}
