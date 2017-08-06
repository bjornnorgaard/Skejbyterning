import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {

    this.items = database.list('/rule', {
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
