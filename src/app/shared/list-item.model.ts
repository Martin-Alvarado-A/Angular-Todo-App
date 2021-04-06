export class ListItem {
  constructor(public title: string, public id: string){
  }

  public titleChange(newTitle: string){
    this.title = newTitle;
  }
}