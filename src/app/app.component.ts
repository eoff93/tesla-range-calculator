import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
      <img [src]="logo">
    </header>
    <div class="wrapper">
      <app-tesla-battery></app-tesla-battery>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  logo: string = 'assets/logo.svg';
}
