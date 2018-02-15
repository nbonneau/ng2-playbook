import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorybookDirective } from "./directives/storybook.directive";

import { StorybookComponent } from "./components/storybook/storybook.component";
import { StorybookMenuComponent } from "./components/storybook-menu/storybook-menu.component";
import { StorybookInfosComponent } from "./components/storybook-infos/storybook-infos.component";

import { StorybookService } from "./services/storybook.service";

import { StorybookConfig } from "./storybook";

@NgModule({
  declarations: [
    StorybookDirective,
    StorybookComponent,
    StorybookMenuComponent,
    StorybookInfosComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    StorybookComponent
  ],
  providers: [

  ]
})
export class Ng2StorybookModule {

  static forRoot(config: StorybookConfig) {
    return {
      ngModule: Ng2StorybookModule,
      providers: [
        { provide: config, useValue: config },
        {
          provide: StorybookService,
          useFactory: (config) => new StorybookService(config),
          deps: [
            config
          ]
        }
      ]
    }
  }

}