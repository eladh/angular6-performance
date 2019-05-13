import {Contact} from '../contact-list/contact-list.component';
import * as faker from 'faker';

export class ContactService {

  generateContactList(size: Number): Set<Contact> {
    const result: Set<Contact> = new Set();
    for (let i = 0; i < size; i ++) {
      result.add(<Contact>{id:  Math.floor((Math.random() * 20) + 15) , name: faker.name.findName()});
    }

    return result;
  }

  createContact(clientName: String) {
    return <Contact>{id: Math.floor((Math.random() * 100) + 1) , name: clientName};
  }


}
