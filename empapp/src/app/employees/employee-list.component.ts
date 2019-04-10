import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from './shared/employee.service';
import { Subscription } from 'rxjs';

@Component({
    // selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
    filteredEmployes: Employee[];
    employees: Employee[];

    // private _filteredBy: string;
    // get filteredBy() {
    //     return this._filteredBy;
    // }

    // set filteredBy(val: string) {
    //     this._filteredBy = val;
    //     this.filteredEmployes = val ? this.functieFiltrare(val) : this.employees;
    // }

    constructor(private empService: EmployeeService) {
    }

    // // folosit pt search
    // @Input() searchKey: string;

    ngOnInit() {
        this.employees = this.empService.getEmployees();
        this.filteredEmployes = this.employees;
        //  this.empService.getEmployees().subscribe(emp => {
        //    console.log(emp)
        //    this.employees = emp;
        //    this.filteredEmployes = this.employees;
        // });
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     const changeSearch = changes['searchKey'];
    //     const c = changeSearch.currentValue;
    // this.filteredEmployes = this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(c) !== -1 );
    // }

    functieFiltrare(keySearch: string): Employee[] {
        keySearch = keySearch.toLocaleLowerCase();
        return this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(keySearch) !== -1);
    }
}
