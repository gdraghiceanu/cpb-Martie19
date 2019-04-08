import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import {debounceTime } from 'rxjs/operators';

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
  searchKeyNav: string;
  @Output() searchNavOut = new EventEmitter();

  keyupSubscription = new Subscription();
  keyupSubject = new Subject();

  constructor() {
    this.searchKeyNav = '';
  }

  ngOnInit() {
    this.keyupSubscription = this.keyupSubject
      .pipe(
       debounceTime(1000)
      )
      .subscribe(
        () => this.searchEmp()
      );
  }

  searchEmp() {
    this.searchNavOut.emit(this.searchKeyNav);
  }


  // // tslint:disable-next-line:member-ordering
  // @ViewChild('navbar') navbar: ElementRef;
  // ngAfterViewInit(): void {
  //   this.navbar.nativeElement.addEventListener('keyup', () => {
  //     this.searchEmp();
  //   });
  // }


}
