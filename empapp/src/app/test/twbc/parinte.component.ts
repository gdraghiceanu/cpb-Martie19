import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parinte',
  templateUrl: './parinte.component.html'
})
export class ParinteComponent implements OnInit {
  
  contor: number;

  constructor() {
    this.contor = 0;
   }

  ngOnInit() {
  }

  increment() {
    this.contor++;
  }

  onCounterChange($event) {
    this.contor = $event;
    // logica
  }

}
