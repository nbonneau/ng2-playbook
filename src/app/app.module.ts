import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2StorybookModule } from "./ng2-storybook/ng2-storybook.module";

import { AppComponent } from './app.component';

// Components
import { Test0Component } from "./components/test-0/test.component";
import { Test1Component } from "./components/test-1/test.component";
import { InputComponent } from "./components/input/input.component";

// Storybook
import { PLAYBOOK } from "./app.storybook";

@NgModule({
  declarations: [
    AppComponent,
    Test0Component,
    Test1Component,
    InputComponent
  ],
  // Required
  entryComponents: [
    Test0Component,
    Test1Component,
    InputComponent
  ],
  imports: [
    BrowserModule,
    // Import Ng2StorybookModule
    Ng2StorybookModule.forRoot({
      "storybook": PLAYBOOK,
      "default": [0]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
