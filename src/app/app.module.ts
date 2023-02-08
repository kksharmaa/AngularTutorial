import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
