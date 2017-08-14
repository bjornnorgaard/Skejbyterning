import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AppGameComponent } from './app-game/app-game.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    AppGameComponent,
  ],
  exports: [
    AppGameComponent,
  ]
})
export class GameModule {
}
