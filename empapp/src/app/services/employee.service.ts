import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';

@Injectable()
export class EmployeeService {

  getEmployees():Employee[] {
    return EMPLOYEES;
  }

  getEmployee(id: number) : Employee {
    return EMPLOYEES.find(emp=>emp.userId === id);
  }

  constructor() { }
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
      imageUrl: '/assets/images/image1.jpg'
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
      'imageUrl': '/assets/images/image2.jpg'
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
      'imageUrl': '/assets/images/image3.jpg'
  }
];
