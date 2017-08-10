import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGameComponent } from './main-game/main-game.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainGameComponent
  ],
  exports: [
    MainGameComponent
  ],
})
export class GameModule {
}
