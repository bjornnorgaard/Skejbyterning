import { Component } from '@angular/core';

@Component({
  selector: 'app-eye-description',
  templateUrl: './eye-description.component.html',
  styleUrls: ['./eye-description.component.scss'],
})
export class EyeDescriptionComponent {

  isOn = false;

  findDiceDescription(selection: string) {
    console.log('Fetching description for : ' + selection);
    this.isOn = true;
  }

}
