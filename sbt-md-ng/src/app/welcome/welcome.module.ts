import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyMaterialModule } from '../my-material/my-material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    WelcomeComponent,
  ],
  exports: [
    WelcomeComponent,
  ]
})
export class WelcomeModule {
}