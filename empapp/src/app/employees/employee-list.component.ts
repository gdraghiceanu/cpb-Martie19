import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../model/Employee';
import { EmployeeService } from './shared/employee.service';

@Component({
    selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

    // @Input() searchKey: string;

    filteredEmployees: Employee[] = [];
    employees: Employee[] = [];

    constructor(private empService: EmployeeService) {
    }

    ngOnInit() {
        this.employees = this.empService.getEmployees();
        this.filteredEmployees = this.employees;

        this.empService.currentSearchKey.subscribe(key => {
            if (this.employees) {
                this.filteredEmployees = this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(key) !== -1);
            }
        });
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     const changeSearch = changes['searchKey'];
    //     const cur = changeSearch.currentValue;
    //     // this.filteredEmployees = this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(cur) !== -1);
    //     this.filteredEmployees = cur ? this.functieFiltrare(cur) : this.employees;
    // }

    // functieFiltrare(keySearch: string): Employee[] {
    //     keySearch = keySearch.toLocaleLowerCase();
    //     return this.employees.filter(emp => emp.firstName.toLocaleLowerCase().indexOf(keySearch) !== -1);
    // }

}
