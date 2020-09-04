import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OddEvenGame';

  oddNumberArr: number[] = [];
  evenNumberArr: number[] = [];

  onIntervalFired(firedInterval: number) {
    if (firedInterval % 2 === 0) {
      this.evenNumberArr.push(firedInterval);
    } else {
      this.oddNumberArr.push(firedInterval);
    }
  }
}
