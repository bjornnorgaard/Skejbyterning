import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  gameTitle: string = environment.gameTitle;
  name: 'no name';

  constructor(private firebase: AngularFireDatabase) {
    this.foo(42, 'John Derp');
    this.bar(42);
  }

  private foo(userId, name) {
    this.firebase.database.ref('users/' + userId).set({
      userId: userId,
      name: name,
    });
  }

  private bar(id: number) {

    const test = this.firebase.database.ref('users/' + id)
      .once('value')
      .then(function (snapshot) {
        console.log(snapshot.val().name); // TODO how do I set this.name = snapshot.val().name?
      });
  }
}
