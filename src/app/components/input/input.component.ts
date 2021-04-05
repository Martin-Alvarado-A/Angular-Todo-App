import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Output() addToDo = new EventEmitter<{text: string}>()
  constructor() { }

  ngOnInit(): void {
  }

  addToList(textField:HTMLInputElement){
    let input = textField.value;
    console.log("addToList: ", input)
    this.addToDo.emit({text: input});


  }
}
