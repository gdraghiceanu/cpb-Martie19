import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EmployeeService } from './employees/shared/employee.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ErrorComponent } from './errors/error.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './user/login.component';
import { AuthService } from './user/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NavBarComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    {
      provide: 'candDeactivateNewEmployee',
      useValue: checkCompState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkCompState(component: CreateEmployeeComponent) {
  if (component.isValid) {
    return window.confirm('You di not save saved this employee! Do you really want to leave this page?');
  }
  return true;
}
