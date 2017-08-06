import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameTitle: string = environment.gameTitle;
  stuff: FirebaseListObservable<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.foo(42, 'John Derp');
  }

  private foo(userId, name) {
    this.firebase.database.ref('users/' + userId).set({
      userId: userId,
      name: name,
    });
  }
}
