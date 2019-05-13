import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private _appService: AppService) {
    this._appService.setState({type: 'regular' , value: 0});
  }

  OnInit(store) {
    this._appService.setState(store.State);

  }

  OnDestroy(store) {
    store.State = this._appService.getState();
  }

}
