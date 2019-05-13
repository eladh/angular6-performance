import {
  AfterViewChecked, ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input,
  OnInit
} from '@angular/core';
import {appStore} from '../appStore';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, DoCheck, AfterViewChecked {
  static nextId = 0;
  @Input() id: number;

  constructor(private cdr: ChangeDetectorRef , private app: ApplicationRef) {
    this.id = ++ClockComponent.nextId;
    const _this = this;

    const org = cdr.detectChanges;
    cdr.detectChanges = function() {
      console.log(`ClockComponent(${_this.id}).changeDetected`);
      return org.apply(this, arguments);
    };
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('ClockComponent.ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log(`ClockComponent(${this.id}).AfterViewChecked`);
  }

  ngAfterViewInit() {
    // this.cdr.detach();
  }

  run() {
    appStore.counter++;
    this.app.tick();
    // this.cdr.detectChanges();
    // this.cdr.markForCheck();
  }

  get counter() {
    return appStore.counter;
  }

  test() {
    console.log(`ClockComponent(${this.id}).test`);
  }
}
