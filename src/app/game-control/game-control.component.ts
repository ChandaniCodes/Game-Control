import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  interval: number;
  @Output() firedInterval = new EventEmitter<number>();
  lastInterval = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.firedInterval.emit(this.lastInterval + 1);
      this.lastInterval++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
    alert('Game Stopped!');
  }
}
