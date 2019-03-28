import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from './shared/employee.service';

@Component({
    // selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit, OnChanges {

    private _filteredBy: string;

    get filteredBy () {
        return this._filteredBy;
    }

    set filteredBy (val: string) {
        this._filteredBy = val;
        this.filteredEmployes = val ? this.functieFiltrare(val) : this.employees; 
    }

    constructor(private empService: EmployeeService) {
    }

    // folosit pt search
    @Input() searchKey: string;

    temp: any;

    filteredEmployes: Employee[];
    employees: Employee[];

    ngOnInit() {
        this.employees = this.empService.getEmployees();
        this.filteredEmployes = this.employees;
    }

    ngOnChanges(changes: SimpleChanges): void {
        const changeSearch = changes['searchKey'];
        const c = changeSearch.currentValue;

        this.filteredEmployes = this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(c) !== -1 );

    }

    handleEventEmpChild(val) {
        this.temp = val;
    }

    functieFiltrare(keySearch: string): Employee[] {
        keySearch = keySearch.toLocaleLowerCase();
        return this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(keySearch) !== -1 );
    }
}
