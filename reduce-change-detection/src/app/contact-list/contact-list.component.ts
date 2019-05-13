import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Function heavy lifting
 **/
const doHeavyLifting = (num: number) => {
    if (num === 1 || num === 2) {
      return 1;
    }
    return doHeavyLifting(num - 1) + doHeavyLifting(num - 2);
  };


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Set<Contact>;

  @Output() remove = new EventEmitter<Contact>();
  @Output() add = new EventEmitter<String>();

  contactName: String;
  // addContactForm: FormGroup;

  constructor() { }


  ngOnInit() {
    // this.addContactForm = new FormGroup ({
    //   contactName: new FormControl('', {
    //     validators: Validators.required,
    //     updateOn: 'submit'
    //   })
    // });
  }
  handleKey($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      this.add.emit(this.contactName);
      this.contactName = '';
    }
  }

  getScore(contact: Contact) {
    return doHeavyLifting(contact.id);
  }

}

export interface Contact {
  id: number;
  name: string;
}
