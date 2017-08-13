import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    AppWelcomeComponent,
  ],
  exports: [
    AppWelcomeComponent,
  ]
})
export class WelcomeModule {
}

