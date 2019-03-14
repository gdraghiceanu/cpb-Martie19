import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>H1</h1>
  <app-emp-list></app-emp-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empapp';
}
