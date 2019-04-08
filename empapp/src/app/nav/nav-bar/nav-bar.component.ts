import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EmployeeService } from 'src/app/employees/shared/employee.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width: 1200px) {#searchForm {display: none }}
  `]
})
export class NavBarComponent {
  searchKeyNav: string;
  // @Output() searchNavOut = new EventEmitter();
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('btnSearch') btnSearch: ElementRef;

  constructor(private empserv: EmployeeService) { }

  // searchEmp() {
  //   this.searchNavOut.emit(this.searchKeyNav);
  // }

  // 1
  // // tslint:disable-next-line:member-ordering
  // // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit(): void {
  //   this.navbar.nativeElement.addEventListener('keyup', () => {
  //     this.searchEmp();
  //   });
  // }

  // 2
  // // tslint:disable-next-line:member-ordering
  // ngAfterViewInit(): void {
  //   fromEvent(this.navbar.nativeElement, 'keyup')
  //     .subscribe(() => {
  //       this.searchEmp();
  //     });
  // }


  // tslint:disable-next-line:member-ordering
  keyupSubscription = new Subscription();
  // tslint:disable-next-line:member-ordering
  keyupSubject = new Subject<string>();

  // // tslint:disable-next-line:use-life-cycle-interface
  // ngOnInit() {
  //   this.keyupSubscription = this.keyupSubject
  //     .pipe(
  //       debounceTime(1000)
  //     )
  //     .subscribe(
  //       () => this.searchEmp()
  //     );
  // }

  // 3
  //   // tslint:disable-next-line:member-ordering
  // ngAfterViewInit(): void {
  //   this.navbar.nativeElement.addEventListener('keyup', () => {
  //     // this.searchEmp();
  //     this.keyupSubject.next(undefined);
  //   });
  // }

  // 4
  // // tslint:disable-next-line:member-ordering
  // // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit(): void {
  //   fromEvent(this.navbar.nativeElement, 'keyup')
  //     .subscribe(() => {
  //       this.keyupSubject.next();
  //     });
  // }

  // 5
  // // tslint:disable-next-line:member-ordering
  // // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit() {
  //   fromEvent(this.navbar.nativeElement, 'keyup')
  //     .subscribe(
  //       () => {
  //         this.empserv.changeSearchKey(this.searchKeyNav);
  //       }
  //     );
  // }

  // 6
  searchEmp() {
    fromEvent(this.btnSearch.nativeElement, 'click').subscribe(() => {
      this.empserv.changeSearchKey(this.searchKeyNav);
    });
  }

}
