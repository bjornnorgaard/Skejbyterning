import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {

    this.items = database.list('/about', {
      query: {
        limitToLast: 50
      }
    });
  }

  // For debugging only
  // noinspection JSUnusedGlobalSymbols
  send() {
    const thing = {
      title: 'This is the title',
      subtitle: 'Some subtitle',
      image: '../../../assets/dice-cover3.jpg',
      content: [
        'one',
        'two',
        'three',
      ],
    };
    this.items.push({card: thing});
  }
}
