import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { EmployeeListComponent } from "./employees/employee-list.component";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";
import { Routes } from "@angular/router";

export const empRoutes: Routes = [
    {path: 'employees/new', component: CreateEmployeeComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'employees/:id', component: EmployeeDetailComponent},
    {path: '', redirectTo: 'employees', pathMatch: 'full'}    
  ];