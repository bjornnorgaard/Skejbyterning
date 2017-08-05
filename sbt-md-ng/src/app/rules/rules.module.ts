import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from '../my-material/my-material.module';
import { CounterComponent } from './counter/counter.component';
import { DialogComponent } from './dialog/dialog.component';
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
    CounterComponent,
    DialogComponent,
  ],
  entryComponents: [
    DialogComponent,
  ],
  exports: [
    RulesComponent,
  ]
})
export class RulesModule {
}
