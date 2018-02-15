import { Component, Type, OnInit, ViewChild, ComponentFactoryResolver, EventEmitter } from '@angular/core';

import { StorybookDirective } from "../../directives/storybook.directive";

import { Item } from "../../storybook";

import { StorybookService } from "../../services/storybook.service";

@Component({
  selector: 'ng2-storybook',
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.css']
})
export class StorybookComponent implements OnInit {

  @ViewChild(StorybookDirective) storybookHost: StorybookDirective;

  items: Array<any>;
  currentItem: any;
  currentItemEvents: Array<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private storybookService: StorybookService
  ) { }

  ngOnInit() {
    this.items = this.storybookService.config.storybook;
    if (this.items.length) {
      const defaults = this.storybookService.config.default;
      this.loadComponent(defaults[0], defaults[1]);
    }
  }

  loadComponent(parentIndex: number, index?: number) {

    let tmp = this.items[parentIndex];

    if (index !== undefined) {
      tmp = this.items[parentIndex].subcomponents[index];
    }

    if (tmp && tmp.component) {

      this.currentItemEvents = [];

      this.currentItem = tmp;

      const storybookItem = new Item(tmp.title, tmp.component, tmp.inputs);

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(storybookItem.component);

      let viewContainerRef = this.storybookHost.viewContainerRef;
      viewContainerRef.clear();

      let componentRef = viewContainerRef.createComponent(componentFactory);

      Object.getOwnPropertyNames(componentRef.instance).forEach((propName) => {
        if (componentRef.instance[propName] instanceof EventEmitter) {
          componentRef.instance[propName].subscribe(($event) => {
            this.currentItemEvents.push({
              "property": propName,
              "type": $event.type
            });
          });
        }
      });

      if (storybookItem.inputs) {
        Object.keys(storybookItem.inputs).forEach((key) => {
          (<any>componentRef.instance)[key] = storybookItem.inputs[key];
        });
      }
    }
  }
}