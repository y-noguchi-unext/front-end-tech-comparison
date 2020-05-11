import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
  inputTitle = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  handleClickButton() {
    window.alert(this.inputTitle.value);
  }
}
