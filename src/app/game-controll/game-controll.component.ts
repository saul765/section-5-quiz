import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.counter++;
      this.intervalEvent.emit(this.counter);
    }, 1000);
  }

  stopInterval(): void {
   clearInterval(this.interval);
  }


}
