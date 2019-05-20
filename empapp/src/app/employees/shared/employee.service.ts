import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { delay } from 'rxjs/operators';


@Injectable(
    // {
    //     providedIn: 'root'
    // }
)
export class EmployeeService {
    public employeeFilter: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private url = 'http://localhost:1337/api/v1/posts';

  constructor(public http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        // return EMPLOYEES;
      return this.http.get<Employee[]>(this.url);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.url}/${id}`);
       // return EMPLOYEES.find(emp => emp.userId === id);
    }

    saveEmployee(employee: Employee): Observable<Employee> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        headers.append('Access-Control-Allow-Origin', 'http://localhost:1337/api/v1/posts');

        return this.http.post<Employee>(this.url, employee, {headers: headers });
    }

    checkCodeReserved(code: string): Observable<boolean> {
        return of(true).pipe(delay(2000));
    }
}

const EMPLOYEES: Employee[] = [
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
