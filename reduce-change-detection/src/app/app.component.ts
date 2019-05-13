import { Component } from '@angular/core';
import {Contact} from './contact-list/contact-list.component';
import {ContactService} from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Set<Contact>;

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.generateContactList(1000);
  }

  add(name: String) {
    this.contacts = this.contacts.add(this.contactService.createContact(name));
  }


  remove(contact: Contact) {
    this.contacts.delete(contact);
  }

}
