import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './employees/template-create-employee/create-employee.component';
import { EmployeeRouteActivatorService } from './employees/services/employee-route-activator.service';
import { ErrorComponent } from './errors/error.component';
import { EmployeeRouteDeactivatorService } from './employees/services/employee-route-deactivator.service';
import { LoginComponent } from './user/login.component';
import { ReactiveCreateEmployeeComponent } from './employees/reactive-create-employee/reactive-create-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
    { path: 'home', component: WelcomeComponent},
    { path: 'employees/newT', component: CreateEmployeeComponent, canDeactivate: [EmployeeRouteDeactivatorService] },
    { path: 'employees/newR', component: ReactiveCreateEmployeeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService] },
    { path: 'user/login', component: LoginComponent },
    { path: 'errors', component: ErrorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

