import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from 'src/app/employees/shared/employee.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from 'src/app/user/auth.service';

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

    constructor(private employeeService: EmployeeService, public authService: AuthService) { }

    ngOnInit() {
        fromEvent(this.navbar.nativeElement, 'keyup')
            .pipe(
                debounceTime(500)
            )
            .subscribe(ev => {
                this.employeeService.employeeFilter.next(this.searchNav);
            });
    }

    // button control
    search() {
        this.employeeService.employeeFilter.next(this.searchNav);
        // this.searchOut.emit(this.searchNav);
    }



}
