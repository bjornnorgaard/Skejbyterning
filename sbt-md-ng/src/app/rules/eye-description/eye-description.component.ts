import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-eye-description',
  templateUrl: './eye-description.component.html',
  styleUrls: ['./eye-description.component.scss'],
})
export class EyeDescriptionComponent {

  die1: number;
  die2: number;

  items: FirebaseListObservable<any[]>;

  constructor(public dialog: MdDialog, private database: AngularFireDatabase) {
  }

  findDiceDescription(selection: string) {
    this.die1 = +selection[0];
    this.die2 = +selection[1];

    const combination = this.sort(this.die1, this.die2);
    console.log('Fetching description for : ' + combination);

    this.items = this.database
      .list('/rule/' + combination, {
        query: {
          limitToLast: 50
        }
      });

    // this.send(combination);
  }

  // For debugging only
  // noinspection JSUnusedGlobalSymbols
  send(combination: string) {
    const thing = {
      title: 'Regl for: ' + combination,
      subtitle: 'Undertitle for regel ' + combination,
      image: '../../../assets/dice1.jpg',
      content: [
        'Beskrivelse afsnit 1 for ' + combination + ' kombinationen.',
        'Afsnit nummer 2.',
      ],
    };
    this.items.push({card: thing});
  }

  sort(die1: number, die2: number): string {
    if (this.die1 < this.die2) {
      return die1 + '' + die2;
    }
    if (this.die1 > this.die2) {
      return die2 + '' + die1;
    }
    return die1 + '' + die2;
  }
}
