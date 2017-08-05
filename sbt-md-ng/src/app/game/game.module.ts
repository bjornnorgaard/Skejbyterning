import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { GameComponent } from './game/game.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
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
