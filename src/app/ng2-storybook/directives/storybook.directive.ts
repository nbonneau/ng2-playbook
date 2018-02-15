import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[storybook-host]',
})
export class StorybookDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}