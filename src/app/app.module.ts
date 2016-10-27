import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { Main, Notes } from './containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './ui';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
      App,
      Main, Notes,
      AppBar, NoteCard, NoteCreator, ColorPicker
    ],
    bootstrap: [App]
})
export class AppModule{
}
