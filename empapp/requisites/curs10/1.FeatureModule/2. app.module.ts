import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EmployeeService } from './employees/services/employee.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/template-create-employee/create-employee.component';
import { ErrorComponent } from './errors/error.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login.component';
import { AuthService } from './user/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmplooyeeModule } from './employees/emplooyee.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EmplooyeeModule,
    RouterModule.forRoot(appRoutes)
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
    return window.confirm(
      'You di not save saved this employee! Do you really want to leave this page?'
    );
  }
  return true;
}
