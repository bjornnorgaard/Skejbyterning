import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DiceSelectorComponent } from './dice-selector/dice-selector.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    RulesComponent,
    DiceSelectorComponent,
  ],
  exports: [
    RulesComponent,
    DiceSelectorComponent,
  ]
})
export class RulesModule {
}
