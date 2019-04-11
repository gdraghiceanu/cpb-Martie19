import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from 'src/app/employees/shared/employee.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
export class NavBarComponent implements OnInit {
   
    @ViewChild('navbar') navbar: ElementRef;
    searchNav: string;
   // @Output() searchOut = new EventEmitter();

    constructor(private employeeService: EmployeeService) { }
    // button control
    search() {
        // this.searchOut.emit(this.searchNav);
        // this.employeeService.empFilterServ.next(this.searchNav);
    }

    ngOnInit(): void {
        fromEvent(this.navbar.nativeElement, 'keyup')
        .pipe(
            debounceTime(1000)
        )
        .subscribe(
            ev => {
                this.employeeService.empFilterServ.next(this.searchNav);
            }
        )
    }


}
