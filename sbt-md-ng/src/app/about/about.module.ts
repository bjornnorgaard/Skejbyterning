import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
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
