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

    console.log('selection: ' + selection[0]);
    console.log('selection: ' + selection[1]);
    console.log('combination: ' + combination);

    this.items = this.database
      .list('/rule/' + combination, {
        query: {
          limitToLast: 50
        }
      });

    console.log(this.die1 + ' ' + this.die2 + ' hello');

    // this.send();
  }

  // For debugging only
  // noinspection JSUnusedGlobalSymbols
  send() {
    const thing = {
      title: 'title' + this.die1 + this.die2,
      subtitle: 'subtitle' + this.die1 + this.die2,
      image: '../../../assets/dice1.jpg',
      content: [
        'one' + this.die1 + this.die2,
        'two' + this.die1 + this.die2,
        'three' + this.die1 + this.die2,
      ],
    };
    this.items.push({card: thing});
  }

  sort(die1: number, die2: number): number {
    return die1 + die2;
  }
}
