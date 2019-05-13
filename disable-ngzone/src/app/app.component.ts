import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Without ZoneJS';

  constructor() {
  }
}
