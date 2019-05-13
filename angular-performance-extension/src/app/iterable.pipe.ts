import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterable'
})
export class IterablePipe implements PipeTransform {
  transform(iterable: any, args: any[]): any {
    const result = [];

    if (iterable.entries) {
      iterable.forEach((key, value) => {
        result.push({ key, value });
      });
    } else {
      for (const key in iterable) {
        if (iterable.hasOwnProperty(key)) {
          result.push({ key, value: iterable[key] });
        }
      }
    }

    return result;
  }
}
