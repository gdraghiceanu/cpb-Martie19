import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './employees/template-create-employee/create-employee.component';
import { EmployeeRouteActivatorService } from './employees/shared/employee-route-activator.service';
import { ErrorComponent } from './errors/error.component';
import { EmployeeRouteDeactivatorService } from './employees/shared/employee-route-deactivator.service';
import { LoginComponent } from './user/login.component';
import { ReactiveCreateEmployeeComponent } from './employees/reactive-create-employee/reactive-create-employee.component';
import { JobsResolver } from './resolvers/jobs.resolver';
import { RegionsResolver } from './resolvers/regions.resolver';
import { EuroCurrencyResolver } from './resolvers/euro-currency.resolver';

export const appRoutes: Routes = [
  { path: 'employees/newT', component: CreateEmployeeComponent, canDeactivate: [EmployeeRouteDeactivatorService] },
  {
    path: 'employees/newR',
    component: ReactiveCreateEmployeeComponent,
    resolve: { jobs: JobsResolver, regions: RegionsResolver, euro: EuroCurrencyResolver }
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent, canActivate: [EmployeeRouteActivatorService] },
  { path: 'errors', component: ErrorComponent },
  { path: 'user/login', component: LoginComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];
