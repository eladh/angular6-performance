import { Component } from '@angular/core';
import {AppService, CounterData} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private _appService: AppService) {
  }

  value() {
    return this._appService.getState().value;
  }

  inc() {
    ++this._appService.getState().value;
  }

  dec() {
    --this._appService.getState().value;
  }
}
