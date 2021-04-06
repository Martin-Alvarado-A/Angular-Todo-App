import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['../../app.component.sass']
})
export class InputComponent implements OnInit {
  logComponent = "InputComponent";
  inputText: string = "";
  @Output() passItemTitle = new EventEmitter<{text: string}>()

  constructor() { }

  ngOnInit(): void {}

  itemTitle(textField: HTMLInputElement){
    console.log(`${this.logComponent} > itemTitle`, textField.value)

    let input = textField.value;
    if(input === "") return;

    this.passItemTitle.emit({text: input});
    
    textField.value = "";
  }
}
