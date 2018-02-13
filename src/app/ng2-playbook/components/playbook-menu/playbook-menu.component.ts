import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng2-playbook-menu',
  templateUrl: './playbook-menu.component.html',
  styleUrls: ['./playbook-menu.component.css']
})
export class PlaybookMenuComponent {

  @Input() items: Array<any>;
  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  onClickItem(parentIndex: number, index?: number) {
    this.clickItem.emit({ parentIndex, index });
  }
}