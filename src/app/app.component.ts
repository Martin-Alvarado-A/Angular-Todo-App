import { Component } from '@angular/core';
import { ListItem } from './shared/list-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


  title = 'Angular-Todo-App';
  listItems: ListItem[] = [];
  

  sendItem(input: {text:string}){
    console.log("sendItem", input.text);
    let id = Math.random().toString(36).substr(2, 9)
    
    this.listItems.push(new ListItem(input.text, id))

    
  }
}
