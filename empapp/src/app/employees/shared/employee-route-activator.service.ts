import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteActivatorService implements CanActivate {

  constructor(private empServ: EmployeeService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isEmpExist = !!this.empServ.getEmployee(+route.params['id']);
    if (!isEmpExist) {
      this.router.navigate(['/errors']);
    }
    return isEmpExist;
  }


}
