import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee, Location } from '../models/employee';
import { NavBarComponent } from '../nav/nav-bar/nav-bar.component';

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
    employees: Employee[] = [
        {
            userId: 'rirani',
            jobTitleName: 'Developer',
            firstName: 'Romin',
            lastName: 'Irani',
            employeeCode: 'E1',
            region: 'CA',
            salary: 1234,
            phoneNumber: '408-1234567',
            emailAddress: 'romin.k.irani@gmail.com',
            location: {
                address: '1057 DT',
                city: 'London',
                country: 'England'
            },
            imageUrl: '/assets/images/angularconnect-shield.png'
        },
        {
            'userId': 'nirani',
            'jobTitleName': 'Developer',
            'firstName': 'Neil',
            'lastName': 'Irani',
            'employeeCode': 'E2',
            'region': 'BA',
            'salary': 467,
            'phoneNumber': '408-1111111',
            'emailAddress': 'neilrirani@gmail.com',
            'website': 'www.neil.org',
            'imageUrl': '/assets/images/angularconnect-shield.png'
        },
        {
            'userId': 'thanks',
            'jobTitleName': 'Program Directory',
            'firstName': 'Tom',
            'lastName': 'Hanks',
            'employeeCode': 'E3',
            'region': 'DA',
            'salary': 6789,
            'phoneNumber': '408-2222222',
            'emailAddress': 'tomhanks@gmail.com',
            'location': {
                'address': '1057 DT',
                'city': 'London',
                'country': 'England'
            },
            'imageUrl': '/assets/images/angularconnect-shield.png'
        }
    ];


    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['filterList'];
        const curVal = change.currentValue;

        this.filteredEmployees = curVal ? this.filterEmployees(curVal) : this.employees;
    }

    ngOnInit() {
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
