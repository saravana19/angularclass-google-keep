import { Component } from '@angular/core';
import { AppBar } from '../ui';

@Component({
  selector: 'main-container',
  template: `
  <div>
    <app-bar></app-bar>
    <main class="main">
        main content will go here
    </main>
  </div>
  `
})
export class Main {}
