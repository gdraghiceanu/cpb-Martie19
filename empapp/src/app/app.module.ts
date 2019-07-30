import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EmployeeService } from './employees/shared/employee.service';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/template-create-employee/create-employee.component';
import { ErrorComponent } from './errors/error.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './user/login.component';
import { AuthService } from './user/auth.service';
import { ReactiveCreateEmployeeComponent } from './employees/reactive-create-employee/reactive-create-employee.component';
import { RonToEuroPipe } from './pipes/ron-to-euro.pipe';
import { InputColorDirective } from './directives/input-color.directive';
import { NameNotAllowedValidatorDirective } from './directives/name-not-allowed-validator.directive';
import { JobsResolver } from './resolvers/jobs.resolver';
import { RegionsResolver } from './resolvers/regions.resolver';
import { EuroCurrencyResolver } from './resolvers/euro-currency.resolver';
import { CodeReservedValidator } from './validators/code-reserved.validator';
import { SuperheroInterceptor } from './interceptors/superhero.interceptor';
import { TestComponent } from './test/test.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeListComponent,
      EmployeeComponent,
      NavBarComponent,
      EmployeeDetailComponent,
      CreateEmployeeComponent,
      ErrorComponent,
      LoginComponent,
      ReactiveCreateEmployeeComponent,
      InputColorDirective,
      NameNotAllowedValidatorDirective,
      RonToEuroPipe,
      TestComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule
   ],
   providers: [
      EmployeeService,
      provide
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}

export function checkCompState(component: CreateEmployeeComponent) {
  if (component.isValid) {
    return window.confirm(
      'You di not save saved this employee! Do you really want to leave this page?'
    );
  }
  return true;
}
