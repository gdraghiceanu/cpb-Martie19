import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/employees/shared/employee.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width: 1200px) {#searchForm {display: none }}
    li > a.active {color: #F97924; }
  `]
})
export class NavBarComponent {

    searchNav: string;
   // @Output() searchOut = new EventEmitter();

    constructor(private employeeService: EmployeeService) { }
    // button control
    search() {
        // this.searchOut.emit(this.searchNav);
    }
}
