import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng2-playbook-infos',
  templateUrl: './playbook-infos.component.html',
  styleUrls: ['./playbook-infos.component.css']
})
export class PlaybookInfosComponent {

  @Input() inputs: any;
  @Input() outputs: any;

  formatInputs(inputs) {
    if (inputs) {
      return JSON.stringify(inputs);
    }
    return "No inputs";
  }
}