import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeListComponent } from "./employees/employee-list.component";
import { EmployeeComponent } from "./employees/employee.component";
import { NavBarComponent } from "./nav/nav-bar/nav-bar.component";
import { EmployeeService } from "./employees/services/employee.service";
import { EmployeeDetailComponent } from "./employees/employee-detail/employee-detail.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./employees/template-create-employee/create-employee.component";
import { ErrorComponent } from "./errors/error.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./user/login.component";
import { AuthService } from "./user/auth.service";
import { ReactiveCreateEmployeeComponent } from "./employees/reactive-create-employee/reactive-create-employee.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { StarComponent } from './shared/star.component';

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
    WelcomeComponent,
    StarComponent
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
    {
      provide: "candDeactivateNewEmployee",
      useValue: checkCompState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkCompState(component: CreateEmployeeComponent) {
  if (component.isValid) {
    return window.confirm(
      "You di not save saved this employee! Do you really want to leave this page?"
    );
  }
  return true;
}
