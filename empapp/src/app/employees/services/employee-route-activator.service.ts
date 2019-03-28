import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteActivatorService implements CanActivate {

  constructor(private empService: EmployeeService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const empExist = !!this.empService.getEmployee(+route.params['id']);
    if (!empExist) {
      this.router.navigate(['/error']);
    }
    return empExist;
  }
}
