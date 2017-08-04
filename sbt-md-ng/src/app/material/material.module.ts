import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdTabsModule,
  MdCardModule,
  MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdTabsModule,
    MdCardModule,
    MdProgressSpinnerModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdTabsModule,
    MdCardModule,
    MdProgressSpinnerModule,
  ],
  declarations: []
})
export class MaterialModule {
}
