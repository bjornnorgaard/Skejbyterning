import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MyMaterialModule } from '../my-material/my-material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  exports: [AboutComponent],
  declarations: [AboutComponent]
})
export class AboutModule {
}
