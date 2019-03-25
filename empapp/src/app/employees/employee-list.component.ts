import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee, Location } from '../models/employee';
import { NavBarComponent } from '../nav/nav-bar/nav-bar.component';
import { EmployeeService } from './shared/employee.service';

@Component({
    selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit, OnChanges {


    @Input() filterList: string;
    temp: any;
    _filteredBy: string;
    get filteredBy() {
        return this._filteredBy;
    }
    set filteredBy(value: string) {
        this._filteredBy = value;
        this.filteredEmployees = this.filteredBy ? this.filterEmployees(this.filteredBy) : this.employees;
    }

    filteredEmployees: Employee[];
    employees: Employee[];

    constructor(private empService: EmployeeService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['filterList'];
        const curVal = change.currentValue;
        this.filteredEmployees = curVal ? this.filterEmployees(curVal) : this.employees;
    }

    ngOnInit() {
        this.employees = this.empService.getEmployees();
        this.filteredEmployees = this.employees;
    }

    filterEmployees(keyVal: string, ): Employee[] {
        keyVal = keyVal.toLocaleLowerCase();
        const result = this.employees.filter(emp => emp.firstName.toLowerCase().indexOf(keyVal) !== -1 ||
            emp.lastName.toLowerCase().indexOf(keyVal) !== -1);

        return result;
    }

    handleEventEmpChild(val) {
        this.temp = val;
    }
}
