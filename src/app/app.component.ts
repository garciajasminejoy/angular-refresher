import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: string[] = ['Max', 'Manuel', 'Anna'];

  constructor() {}

  onPersonCreated(name: string): void {
    this.persons.push(name);
  }

}
