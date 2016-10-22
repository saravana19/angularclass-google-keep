import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { Main } from './containers';
import { Notes } from './containers';

import { AppBar, NoteCard, NoteCreator } from './ui';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
      App,
      Main, Notes,
      AppBar, NoteCard, NoteCreator
    ],
    bootstrap: [App]
})
export class AppModule{
}
