import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/shared/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: ListItem;

  constructor() { 
    this.listItem = new ListItem("a", "asd");
  }

  ngOnInit(): void {
  }

}
