import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html',
    styles: [`
        .pad-left {margin-left: 60px; }
        .well div {color: #bbb; }
        .thumbnail {mni-height: 210px; }
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
}
