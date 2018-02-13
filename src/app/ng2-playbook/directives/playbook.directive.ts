import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[playbook-host]',
})
export class PlaybookDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}