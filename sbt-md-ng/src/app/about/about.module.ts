import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent,
  ]
})
export class AboutModule {
}
