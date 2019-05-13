import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from './contact-list.component';

declare let require: any;

const memoize = require('lodash.memoize');



/**
 * Function heavy lifting
 **/
const doHeavyLifting = memoize((num: number) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return doHeavyLifting(num - 1) + doHeavyLifting(num - 2);
});



@Pipe({ name: 'score', pure: true })
export class ScorePipe implements PipeTransform {
  transform(contact: Contact) {
    return doHeavyLifting(contact.id);
  }
}
