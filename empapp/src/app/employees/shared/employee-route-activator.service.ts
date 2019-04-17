import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeService } from './employee.service';
import { AuthService } from 'src/app/user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteActivatorService implements CanActivate {

  constructor(private empServ: EmployeeService, private router: Router, private authServ: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    // if (!this.authServ.isAuthenticated()) {
    //   this.router.navigate(['user/login']);
    // }

    const isEmpExist = !!this.empServ.getEmployee(+route.params['id']);
    if (!isEmpExist) {
      this.router.navigate(['/errors']);
    }
    return isEmpExist;
  }


}
