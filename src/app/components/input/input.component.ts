import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() placeholder: string;

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  onInputFocus($event){
    this.onFocus.emit($event);
  }
}
