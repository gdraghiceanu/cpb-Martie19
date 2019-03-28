import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

  getEmployee (id: number) {
    return EMPLOYEES.find(emp => emp.userId === id);
  }

}

const EMPLOYEES = [
  {
      userId: 1,
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
      'userId': 2,
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
      'userId': 3,
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
