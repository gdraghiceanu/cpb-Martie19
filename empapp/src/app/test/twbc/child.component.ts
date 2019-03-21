import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Input() contor: number;
  @Output() contorChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementc() {
    this.contorChange.emit(++this.contor);
  }

}
