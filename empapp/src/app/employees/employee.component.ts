import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html',
    styles: [`
        .pad-left {margin-left: 60px; }
        .well div {color: #bbb; }
        .thumbnail {mni-height: 210px; }
        .green { color: blue !important;  }
        .bold { font-weight: bold; }
    `]
})
export class EmployeeComponent {

    @Input() employee: any;
    @Output() empClick = new EventEmitter();

    public contor = 0;

    constructor() {
        setInterval(() => { this.contor++; }, 1000);
    }

    clikEvent() {
        // console.log('clicked');
        this.empClick.emit(this.contor);
    }

    logFoo() {
        console.log('foo');
    }

    getEmployeName () {
        return this.employee.firstName + ' ' + this.employee.lastName;
    }

    getRegionClass() {
        if ( this.employee && this.employee.region === 'CA') {
            return ['green bold'];
        return [];
        }
    }

    getRegionStyle(): any {
        // if ( this.employee && this.employee.region === 'CA') {
        //     return { color: 'red', 'font-weight': 'bold' };
        return {};
        }
    }



