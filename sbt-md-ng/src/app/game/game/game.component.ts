import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameTitle: string = environment.gameTitle;
  name: string;

  constructor() {
    this.name = 'No Name';
  }
}
