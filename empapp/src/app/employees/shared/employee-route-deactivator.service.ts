import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot } from '@angular/router';
import { CreateEmployeeComponent } from '../template-create-employee/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRouteDeactivatorService implements CanDeactivate<CreateEmployeeComponent> {

  constructor() { }

  canDeactivate(component: CreateEmployeeComponent, currentRoute: ActivatedRouteSnapshot): boolean {

    if (component.isValid) {
      return confirm('Navigate away and loose all changes on this page!');
    }

  }

}
