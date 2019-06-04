import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Resolve } from '@angular/router';
import { EmployeeService } from './employee.service';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmployeeListResolver implements Resolve<Employee[]> {

    constructor(private empService: EmployeeService) {}

    resolve() {
        return this.empService.getEmployees().pipe(
            map(emp => emp)
        );
    }
}