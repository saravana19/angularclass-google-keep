import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from '../containers';

@Component({
  selector: 'main-container',
  template: `
  <div>
    <app-bar></app-bar>
    <main class="main">
        <notes-container></notes-container>
    </main>
  </div>
  `
})
export class Main {}
