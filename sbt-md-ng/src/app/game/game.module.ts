import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    GameComponent,
  ],
  exports: [
    GameComponent,
  ]
})
export class GameModule {
}
