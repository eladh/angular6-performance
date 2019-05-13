import { Injectable } from '@angular/core';

export interface CounterData {
  type: string;
  value: number;
}


@Injectable()
export class AppService {

  counter: CounterData;

  public getState(): CounterData {
    return this.counter;
  }

  public setState(counterData: CounterData) {
    this.counter = counterData;
  }
}
