import {Component, Input, OnInit} from '@angular/core';
import {NumberType} from '../enum/NumberType';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() inputOddCounter: { type: NumberType, numbers: number };

  constructor() {
  }

  ngOnInit(): void {
  }

}
