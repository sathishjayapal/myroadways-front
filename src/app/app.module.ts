import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent

  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
