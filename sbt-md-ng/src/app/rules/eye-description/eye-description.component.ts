import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-eye-description',
  templateUrl: './eye-description.component.html',
  styleUrls: ['./eye-description.component.scss'],
})
export class EyeDescriptionComponent {

  isOn = true;
  die1: number;
  die2: number;

  constructor(public dialog: MdDialog) {
  }

  findDiceDescription(selection: string) {
    console.log('Fetching description for : ' + selection);

    this.isOn = true;
    this.die1 = +selection[0];
    this.die2 = +selection[1];

    if (this.die1 === 6 && this.die2 === 6) {
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.componentInstance.textToShow = 'Vælg en som skal tømme sin øl';
    }
    if (this.die1 === 1 && this.die2 === 1) {
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.componentInstance.textToShow = 'DU skal tømme din øl';
    }
    if (this.die1 === 1 && this.die2 === 3) {
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.componentInstance.textToShow = 'UNLUCKY NUMBER';
    }
    if (this.die1 === 3 && this.die2 === 4) {
      const dialogRef = this.dialog.open(DialogComponent);
      dialogRef.componentInstance.textToShow = 'DEEP WATER SOLO YOLO';
    }
  }
}
