import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media(max-width: 1200px) {#searchForm {display: none }}
  `]
})
export class NavBarComponent implements OnInit, AfterViewInit {
    @Output() filterOut = new EventEmitter<string>();
    @ViewChild('navbar') navbar: ElementRef<HTMLInputElement>;
    navFilter: string;

    private keyupSubject: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);
    private keyupSubscription: Subscription;

    constructor() { }

    ngOnInit() {
        this.keyupSubscription = this.keyupSubject
            .pipe(
                debounceTime(1000)
            )
            .subscribe(() => this.search());
    }

    // button control
    search() {
        this.filterOut.emit(this.navFilter);
    }

    // keyup event control
    ngAfterViewInit(): void {
        this.navbar.nativeElement.addEventListener('keyup', () => {
            // varianta directa
            // this.search();

            // varianta debounce
            this.keyupSubject.next(undefined);
        });
    }

    // for future , form control.valueChange.subscribe -- add debounce
}
