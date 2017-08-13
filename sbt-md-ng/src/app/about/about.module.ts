import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AppAboutComponent } from './app-about/app-about.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    AppAboutComponent
  ],
  exports: [
    AppAboutComponent,
  ]
})
export class AboutModule {
}

