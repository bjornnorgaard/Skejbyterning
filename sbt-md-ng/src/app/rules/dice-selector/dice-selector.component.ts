import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-selector',
  templateUrl: './dice-selector.component.html',
  styleUrls: ['./dice-selector.component.scss']
})
export class DiceSelectorComponent {

  numbers = [1, 2, 3, 4, 5, 6];

}
