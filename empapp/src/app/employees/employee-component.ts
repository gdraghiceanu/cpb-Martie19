import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-emp',
    templateUrl: './employee-component.html'
})
export class EmployeeComponent implements OnInit {
    size = 250;
    contor = 0;

    isVisible: boolean;

    constructor() {
        this.isVisible = true;
    }
    @Input() employee: any;
    @Output() employeeOut = new EventEmitter();

    ngOnInit() {
        setInterval(() => {this.contor++;}, 1000);
    }

    toggleImage() {
        this.isVisible = !this.isVisible;
    }
    handleChildEvent() {
        this.employeeOut.emit(this.contor);
    }
}