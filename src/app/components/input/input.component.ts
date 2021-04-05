import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  inputText: string = "";

  @Output() sendItem = new EventEmitter<{text: string}>()
  constructor() { }

  ngOnInit(): void {
  }

  addToList(textField:HTMLInputElement){
    let input = textField.value;
    console.log("addToList: ", input)
    this.sendItem.emit({text: input});
    
    textField.value = "";

  }
}
