import { Component } from '@angular/core';

@Component({
  selector: 'app-eye-description',
  templateUrl: './eye-description.component.html',
  styleUrls: ['./eye-description.component.scss'],
})
export class EyeDescriptionComponent {

  isOn = true;
  die1: string;
  die2: string;

  findDiceDescription(selection: string) {
    console.log('Fetching description for : ' + selection);

    this.isOn = true;
    this.die1 = selection[0];
    this.die2 = selection[1];
  }

}
