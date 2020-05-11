import { Component, OnInit, Input, Output } from '@angular/core';
import { ITodo } from '../ITodo';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;
  constructor() { }

  ngOnInit(): void {
  }

  handleClickDeleteButton() {
    this.todo.deleted = true;
  }

  handleClickCheckbox() {
    this.todo.completed = !this.todo.completed;
  }
}
