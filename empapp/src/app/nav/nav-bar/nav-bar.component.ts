import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width: 1200px) {#searchForm {display: none }}
  `]
})
export class NavBarComponent implements OnInit {

    searchNav: string;
    @Output() searchOut = new EventEmitter();

    constructor() { }

    ngOnInit() {}

    search() {
      this.searchOut.emit(this.searchNav);
    }

}
