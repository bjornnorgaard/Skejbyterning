import { Component } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MaterialModule]
})
export class AppComponent {
  gameTitle: string = environment.gameTitle;
}
