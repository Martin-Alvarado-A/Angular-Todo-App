import { Component } from '@angular/core';
import { ListItem } from './shared/list-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  logComponent = "AppComponent";
  title = 'Angular-Todo-App by Martin O. A. A.';
  listItems: ListItem[] = [];

  createNewItem(input: {text:string}){
    console.log(`${this.logComponent} > createNewItem`, input.text);

    let id = Math.random().toString(36).substr(2, 9)
    this.listItems.push(new ListItem(input.text, id))
  }

  renameItem(toRename: {itemId: string, newText:string}){
    console.log(`${this.logComponent} > renameItem`, toRename);

    this.listItems.find(item => item.id === toRename.itemId)?.titleChange(toRename.newText);
  }

  deleteItem(toDelete: {itemId: string}){
    console.log(`${this.logComponent} > deleteItem`, toDelete);

    this.listItems = this.listItems.filter(item => item.id != toDelete.itemId);
  }

  completeItem(toCheck: {itemId: string}){
    console.log(`${this.logComponent} > completeItem`, toCheck);

    this.listItems.find(item => item.id === toCheck.itemId)?.toogleCheck();
  }
}
