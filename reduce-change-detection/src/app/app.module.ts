import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactService} from './services/contact.service';
import {ScorePipe} from './contact-list/score.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule, FormsModule , ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
