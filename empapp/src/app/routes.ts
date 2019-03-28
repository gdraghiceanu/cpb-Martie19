import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';

export const appRoutes: Routes = [
    { path: 'employees', component: EmployeeListComponent},
    {path: 'employees/:id' , component: EmployeeDetailComponent},
    { path: '', redirectTo: '/employees', pathMatch: 'full'}
];

