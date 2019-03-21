import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parinte',
  template: `
    <h1>Hello {{name}}</h1>
    <a-comp [o]="o"></a-comp>
    <a1-comp [o]="o"></a1-comp>
  `
})
export class ParinteComponent implements OnInit {

  name = `Angular!`;
  o = {id: 1, name: 'John'};

  ngOnInit() {
    setTimeout(() => {
      this.o.id = 2;
      this.o.name = 'Jane';
    }, 2000);
  }

}
