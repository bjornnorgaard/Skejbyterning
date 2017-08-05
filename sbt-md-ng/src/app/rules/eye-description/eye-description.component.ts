import { Component } from '@angular/core';
import { RuleService } from '../../services/rule/rule.service';

@Component({
  selector: 'app-eye-description',
  templateUrl: './eye-description.component.html',
  styleUrls: ['./eye-description.component.scss'],
})
export class EyeDescriptionComponent {

  rule: string;
  errorMessage: string;
  isOn = true;

  constructor(private ruleService: RuleService) {
  }

  findDiceDescription(selection: string) {
    console.log('Fetching description for : ' + selection);
    this.ruleService.fetchRule(selection)
      .subscribe(
        rule => this.rule = rule,
        error => this.errorMessage = <any>error
      );
  }

}
