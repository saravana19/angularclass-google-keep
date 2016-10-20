import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { Main } from './containers';
import { AppBar } from './ui';

@NgModule({
    imports: [BrowserModule],
    declarations: [App, Main, AppBar ],
    bootstrap: [App]
})
export class AppModule{
}
