import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { DiceSelectorComponent } from './dice-selector/dice-selector.component';
import { EyeDescriptionComponent } from './eye-description/eye-description.component';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
  ],
  declarations: [
    RulesComponent,
    DiceSelectorComponent,
    EyeDescriptionComponent,
  ],
  exports: [
    RulesComponent,
  ]
})
export class RulesModule {
}
