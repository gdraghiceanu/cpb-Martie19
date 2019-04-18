import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EmployeeRouteActivatorService } from './employees/shared/employee-route-activator.service';
import { ErrorComponent } from './errors/error.component';
import { EmployeeRouteDeactivatorService } from './employees/shared/employee-route-deactivator.service';
import { LoginComponent } from './employees/user/login.component';

export const appRoutes: Routes = [
    { path: 'employees/new', component: CreateEmployeeComponent, canDeactivate: [EmployeeRouteDeactivatorService] },
    // { path: 'employees/new', component: CreateEmployeeComponent, canDeactivate: ['candDeactivateNewEmployee'] },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService] },
    { path: 'errors', component: ErrorComponent },
    { path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'user/login', component: LoginComponent}
];

