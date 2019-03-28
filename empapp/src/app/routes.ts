import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ErrorComponent } from './errors/error.component';
import { EmployeeRouteActivatorService } from './employees/services/employee-route-activator.service';

export const appRoutes: Routes = [
    {path: 'employees/new', component: CreateEmployeeComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService]},
    {path: 'error', component: ErrorComponent},
    {path: '', redirectTo: '/employees', pathMatch: 'full'}
];

