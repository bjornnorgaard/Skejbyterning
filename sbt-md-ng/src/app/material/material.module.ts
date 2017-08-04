import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdToolbarModule, MdCardModule, MdRadioModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdRadioModule,
  ],
  declarations: []
})
export class MaterialModule {
}
