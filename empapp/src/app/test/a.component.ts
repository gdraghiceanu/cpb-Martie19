import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a-comp',
  template: `<h2>The name is: {{o.name}}</h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {

  @Input() o;

  constructor() { }

  ngOnInit() {
  }

}
