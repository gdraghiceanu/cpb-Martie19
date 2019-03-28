import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1 class="errorMessage">Pagina nu exista!</h1> `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
