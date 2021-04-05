import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
