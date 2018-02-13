import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlaybookDirective } from "./directives/playbook.directive";

import { PlaybookComponent } from "./components/playbook/playbook.component";
import { PlaybookMenuComponent } from "./components/playbook-menu/playbook-menu.component";
import { PlaybookInfosComponent } from "./components/playbook-infos/playbook-infos.component";

import { PLAYBOOK } from "../app.playbook";

const entryComponents = getEntryComponents(PLAYBOOK);

@NgModule({
  declarations: [
    PlaybookDirective,
    PlaybookComponent,
    PlaybookMenuComponent,
    PlaybookInfosComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PlaybookComponent
  ],
  entryComponents: entryComponents,
  providers: [

  ]
})
export class Ng2PlaybookModule { }

export function getEntryComponents(items: Array<any>): Array<any> {
  const result = [];
  items.forEach((item) => {
    if (item.component) {
      result.push(item.component);
    } else if (item.subcomponents) {
      item.subcomponents.forEach((subitem) => {
        result.push(subitem.component);
      });
    }
  });
  return result;
}
