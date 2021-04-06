import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from 'src/app/shared/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['../../app.component.sass']
})
export class ListItemComponent implements OnInit {
  logComponent = "ListItemComponent";
  @Input() listItem: ListItem = new ListItem("", "");
  @Output() renameItem = new EventEmitter<{itemId: string, newText: string}>();
  @Output() deleteItem = new EventEmitter<{itemId: string}>();
  @Output() completeItem = new EventEmitter<{itemId: string}>();
  
  constructor() {}

  ngOnInit(): void {}

  onTitleChange(element: HTMLSpanElement){
    console.log(`${this.logComponent} > onTitleChange`, element.innerText)

    let newText = element.innerText;
    if(newText === "") {
      element.innerText = this.listItem.title; 
      return;
    }

    this.listItem.title = newText;
    this.renameItem.emit({itemId: this.listItem.id, newText: newText});
  }

  onDeleteItem(){
    console.log(`${this.logComponent} > onDeleteItem`, this.listItem.id)

    this.deleteItem.emit({itemId: this.listItem.id});
  }

  onCompleteItem(){
    console.log(`${this.logComponent} > onCompleteItem`)

    let titleSelected = document.getElementsByClassName("list_item__title")[0] == document.activeElement;
    if ( titleSelected ) return;

    
    this.completeItem.emit({itemId: this.listItem.id});
  }

}
