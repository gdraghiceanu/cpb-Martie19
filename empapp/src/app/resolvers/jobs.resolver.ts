import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeService } from '../employees/shared/employee.service';

@Injectable()
export class JobsResolver implements Resolve<string[]> {
  constructor(private employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string[]> {
    return this.employeeService.getJobs();
  }
}
