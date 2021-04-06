import { Component } from '@angular/core';
import { ListItem } from './shared/list-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-Todo-App by Martin O. A. A.';
  listItems: ListItem[] = [];

  sendItem(input: {text:string}){
    console.log("sendItem", input.text);

    let id = Math.random().toString(36).substr(2, 9)
    this.listItems.push(new ListItem(input.text, id))
  }

  renameItem(toRename: {itemId: string, newText:string}){
    console.log("renameItem: ", toRename);

    this.listItems.find(item => item.id === toRename.itemId)?.titleChange(toRename.newText);
  }

  deleteItem(toDelete: {itemId: string}){
    console.log("deleteItem: ", toDelete);

    this.listItems = this.listItems.filter(item => item.id != toDelete.itemId);
  }

  completeItem(toScratch: {itemId: string}){
    console.log("completeItem: ", toScratch);

  }
}
