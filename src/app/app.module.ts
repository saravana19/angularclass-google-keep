import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { Main } from './containers';
import { Notes } from './containers';

import { AppBar } from './ui';
import { NoteCard } from './ui';

@NgModule({
    imports: [BrowserModule],
    declarations: [
      App,
      Main, Notes,
      AppBar, NoteCard
    ],
    bootstrap: [App]
})
export class AppModule{
}
