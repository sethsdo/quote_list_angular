import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { ShowListComponent } from './quote-list/show-list/show-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
