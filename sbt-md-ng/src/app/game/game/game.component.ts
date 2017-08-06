import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameTitle: string = environment.gameTitle;
  name: string;

  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.name = 'No Name';

    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.Send('Hello World!');
  }

  Send(desc: string) {
    this.items.push({message: desc});
  }
}
