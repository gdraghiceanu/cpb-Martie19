import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ErrorComponent } from './errors/error.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NavBarComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
