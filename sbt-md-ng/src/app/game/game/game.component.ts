import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  items: FirebaseListObservable<any[]>;
  public numbers = [2, 3, 4, 5, 6];
  public players: number;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('/game', {
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

  numberOfPlayersSelected(number: number) {
    this.players = number;
  }

  okButtonClicked() {
    if (!this.players){
      return;
    }
  }
}
