import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  date: any;

  constructor() {
    this.date = new Date().toISOString();
  }
  onDateUpdate(date: string): void {
    this.date = date;
  }
}
