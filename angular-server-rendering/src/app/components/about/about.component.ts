import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

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
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public users: any = [];

    constructor(
        private title: Title,
        private meta: Meta,
        private http: HttpClient
    ) { }


    ngOnInit() {
        this.title.setTitle('About / Angular SSR');
        this.meta.updateTag({
            'description': 'Welcome to about section'
        });

      for (let i = 0; i < 1000; i ++) {
        this.users.push({id:  Math.floor((Math.random() * 20) + 15)});
      }
    }


    getScore(userId: number) {
      return doHeavyLifting(userId);
    }
}
