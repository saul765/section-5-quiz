import {Component} from '@angular/core';
import {NumberType} from './enum/NumberType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getCounter;
  evenArray: { type: NumberType, numbers: number }[] = [];
  oddArray: { type: NumberType, numbers: number }[] = [];
  mixedNumbers: { type: NumberType, numbers: number }[] = [];

  getNumber(counter: number): void {
    this.getCounter = counter;
    console.log(counter);
    if (counter % 2 === 0) {
      this.evenArray.push({type: NumberType.EVEN, numbers: counter});
    } else {
      this.oddArray.push({type: NumberType.ODD, numbers: counter});
    }
  }


}

