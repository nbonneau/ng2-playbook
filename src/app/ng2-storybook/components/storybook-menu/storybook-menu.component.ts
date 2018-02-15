import { Component, Input, Output, EventEmitter, ViewChildren } from '@angular/core';

@Component({
  selector: 'ng2-storybook-menu',
  templateUrl: './storybook-menu.component.html',
  styleUrls: ['./storybook-menu.component.css']
})
export class StorybookMenuComponent {

  @Input() items: Array<any>;
  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  onClickItem(parentIndex: number, index?: number) {
    this.clickItem.emit({ parentIndex, index });
  }

  onItemClick(item) {
    this.items.forEach((item0) => {
      //if (item0 !== item) {
      item0.open = false;
      //}
      if (item0.subcomponents) {
        item0.subcomponents.forEach((item1) => {
          item1.open = false;
          if (item1 === item) {
            item0.open = true;
          }
        });
      }
    });
    item.open = true;
  }

}
