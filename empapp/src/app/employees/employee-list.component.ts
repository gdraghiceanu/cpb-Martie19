import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from './shared/employee.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    // selector: 'app-emp-list',
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    filteredEmployes: Employee[];
    employees: Employee[] = [];

    private employeeFilterSubscription: Subscription;

    constructor(private empService: EmployeeService, private route: ActivatedRoute) { }


    ngOnInit() {

        // this.empService.getEmployees().subscribe(
        //     data => {
        //         this.employees = data,
        //             this.filteredEmployes = this.employees;
        //     },
        //     err => console.log('eroare'),
        //     () => console.log('allcomplete')
        // );
        this.employees = this.route.snapshot.data['employees'];
        this.filteredEmployes = this.employees;

        // this.filteredEmployes = this.employees;
        this.employeeFilterSubscription = this.empService.employeeFilter.asObservable().subscribe(
            key => {
                this.filteredEmployes = this.functieFiltrare(key);
            }
        );
    }

    ngOnDestroy(): void {
        this.employeeFilterSubscription.unsubscribe();
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
