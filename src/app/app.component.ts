import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-Todo-App';
  listItems = [];
  

  addToDoItem(input: {text:string}){
    console.log("addToDoItem", input.text)
    

  }
}
