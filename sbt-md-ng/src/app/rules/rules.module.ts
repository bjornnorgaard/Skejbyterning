import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RulesComponent } from './rules/rules.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    RulesComponent
  ],
  exports: [
    RulesComponent,
  ]
})
export class RulesModule {
}
