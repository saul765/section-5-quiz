import {Component, Input, OnInit} from '@angular/core';
import {NumberType} from '../enum/NumberType';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() inputEvenCounter: { type: NumberType, numbers: number };

  constructor() {
  }

  ngOnInit(): void {
  }

}
