import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './template-create-employee/create-employee.component';
import { ReactiveCreateEmployeeComponent } from './reactive-create-employee/reactive-create-employee.component';
import { EmployeeRouteDeactivatorService } from './shared/employee-route-deactivator.service';
import { EmployeeListResolver } from './shared/employee-list.resolver.service';
import { EmployeeRouteActivatorService } from './shared/employee-route-activator.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '/newT', component: CreateEmployeeComponent, canDeactivate: [EmployeeRouteDeactivatorService] },
      { path: '/newR', component: ReactiveCreateEmployeeComponent },
      { path: '', component: EmployeeListComponent, resolve: { employees: EmployeeListResolver } },
      { path: '/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService] },
    ])
  ],
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    ReactiveCreateEmployeeComponent
  ]
})
export class EmployeeModule { }

export function checkCompState(component: CreateEmployeeComponent) {
  if (component.isValid) {
    return window.confirm(
      'You di not save saved this employee! Do you really want to leave this page?'
    );
  }
  return true;
}