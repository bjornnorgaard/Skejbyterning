import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class MaterialModule {
}
