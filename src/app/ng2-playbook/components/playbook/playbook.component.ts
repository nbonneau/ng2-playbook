import { Component, Type, OnInit, ViewChild, ComponentFactoryResolver, EventEmitter } from '@angular/core';

import { PlaybookDirective } from "../../directives/playbook.directive";

import { PLAYBOOK } from "../../../app.playbook";

@Component({
  selector: 'ng2-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit {

  @ViewChild(PlaybookDirective) playbookHost: PlaybookDirective;

  items: Array<any>;
  currentItem: any;
  currentItemEvents: Array<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.items = [...PLAYBOOK];
    this.loadComponent(2,0);
  }

  loadComponent(parentIndex: number, index?: number) {

    let tmp = this.items[parentIndex];

    if (index !== undefined) {
      tmp = this.items[parentIndex].subcomponents[index];
    }

    if (tmp && tmp.component) {

      this.currentItemEvents = [];

      this.currentItem = tmp;

      const playbookItem = new PlaybookItem(tmp.component, (<any>tmp).inputs);

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(playbookItem.component);

      let viewContainerRef = this.playbookHost.viewContainerRef;
      viewContainerRef.clear();

      let componentRef = viewContainerRef.createComponent(componentFactory);

      Object.getOwnPropertyNames(componentRef.instance).forEach((propName)=>{
        if(componentRef.instance[propName] instanceof EventEmitter){
          componentRef.instance[propName].subscribe(($event)=>{
            this.currentItemEvents.push({
              "property": propName,
              "type": $event.type
            });
          });
        }
      });

      if (playbookItem.inputs) {
        Object.keys(playbookItem.inputs).forEach((key) => {
          (<any>componentRef.instance)[key] = playbookItem.inputs[key];
        });
      }
    }
  }
}

export class PlaybookItem {
  constructor(
    public component?: Type<any>, 
    public inputs?: Object
  ) {}
}