import { Component, OnInit, Input, ChangeDetectorRef, DoCheck, OnChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'a1-comp',
  template: `<h2>The name is: {{o.name}}</h2>`
})
export class A1Component implements DoCheck, OnChanges {

  @Input() o;

  // store previous value of `id`
  id;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    // every time the object changes
    // store the new `id`
    this.id = this.o.id;
  }

  ngDoCheck() {
    // check for object mutation
    if (this.id !== this.o.id) {
      this.cd.markForCheck();
    }
  }

}
