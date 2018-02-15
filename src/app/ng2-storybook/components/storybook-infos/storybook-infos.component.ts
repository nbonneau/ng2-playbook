import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ng2-storybook-infos',
  templateUrl: './storybook-infos.component.html',
  styleUrls: ['./storybook-infos.component.css']
})
export class StorybookInfosComponent implements OnInit {

  @Input() inputs: any;
  @Input() outputs: any;

  @ViewChild('inputsElm') inputsElm: ElementRef;

  ngOnInit(){
    (<any>this.inputsElm.nativeElement).active = true;
  }

  formatInputs(inputs) {
    if (inputs) {
      return JSON.stringify(inputs);
    }
    return "No inputs";
  }
}