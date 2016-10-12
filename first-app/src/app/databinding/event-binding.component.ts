import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()"> Click Me! </button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() clicked = new EventEmitter<string>();

  onClicked() {
    this.clicked.emit('It Emits! Nice');
  }

}
