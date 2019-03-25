import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
    selector: 'app-emp-list',
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

    // folosit pt search
    @Input() searchKey: string;

    temp: any;

    filteredEmployes: Employee[];
    employees = [
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

    ngOnInit() {
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
