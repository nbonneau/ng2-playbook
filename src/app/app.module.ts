import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2PlaybookModule } from "./ng2-playbook/ng2-playbook.module";

import { AppComponent } from './app.component';

// Components
import { Test0Component } from "./components/test-0/test.component";
import { Test1Component } from "./components/test-1/test.component";
import { InputComponent } from "./components/input/input.component";

@NgModule({
  declarations: [
    AppComponent,
    Test0Component,
    Test1Component,
    InputComponent
  ],
  imports: [
    BrowserModule,
    Ng2PlaybookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
