import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveCreateEmployeeComponent } from './reactive-create-employee/reactive-create-employee.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './template-create-employee/create-employee.component';
import { RouterModule } from '@angular/router';
import { EmployeeRouteDeactivatorService } from './services/employee-route-deactivator.service';
import { EmployeeRouteActivatorService } from './services/employee-route-activator.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from '../shared/star.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'employees/newT', component: CreateEmployeeComponent, canDeactivate: [EmployeeRouteDeactivatorService] },
      { path: 'employees/newR', component: ReactiveCreateEmployeeComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService] },
    ])
  ],
  declarations: [
    ReactiveCreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    StarComponent
  ]
})
export class EmplooyeeModule { }
