export class ListItem {
  constructor(public title: string, public id: string, public checked: boolean = false){
  }

  public titleChange(newTitle: string){
    this.title = newTitle;
  }

  public toogleCheck(){
    this.checked = !this.checked;
  }
}