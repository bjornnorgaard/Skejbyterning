import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.scss']
})
export class AppWelcomeComponent {

  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('/welcome', {
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
      image: '../../../assets/dice.jpg',
      content: [
        'one',
        'two',
        'three',
      ],
    };
    this.items.push({card: thing});
  }
}
