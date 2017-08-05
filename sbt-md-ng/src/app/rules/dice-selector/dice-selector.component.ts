import { Component, Output, EventEmitter } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-dice-selector',
  templateUrl: './dice-selector.component.html',
  styleUrls: ['./dice-selector.component.scss']
})
export class DiceSelectorComponent {

  public numbers = [1, 2, 3, 4, 5, 6];
  @Output() onBothDiceSelected = new EventEmitter<string>();
  public firstDieValue: number;
  public secondDieValue: number;

  firstDieSelected(value: number) {
    this.firstDieValue = value;
    this.diceSelectionUpdated();
  }

  secondDieSelected(number: number) {
    this.secondDieValue = number;
    this.diceSelectionUpdated();
  }

  private diceSelectionUpdated() {
    console.log('Dice selected are: ' + this.firstDieValue + ' and ' + this.secondDieValue);
    if (!isUndefined(this.firstDieValue) && !isUndefined(this.secondDieValue)) {
      console.log('Both dice are selected');
      this.sendDiceSelectedEvent();
    }
  }

  private sendDiceSelectedEvent() {
    const selection = this.firstDieValue + '' + this.secondDieValue;
    console.log('Emitting ' + this.onBothDiceSelected + '-event with ' + selection);
    this.onBothDiceSelected.emit(selection);
  }

}
