import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EmployeeService } from './employees/shared/employee.service';
import { appRoutes } from './routes';
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { CreateEmployeeComponent } from './employees/template-create-employee/create-employee.component';
import { ErrorComponent } from './errors/error.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './user/auth.service';
import { EmployeeListResolver } from './employees/shared/employee-list.resolver.service';
import { EmployeeModule } from './employees/employee.module';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ErrorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectiveStrategy })
  ],
  providers: [
    // EmployeeService,
    // EmployeeListResolver,
    // {
    //   provide: 'candDeactivateNewEmployee',
    //   useValue: checkCompState
    // },
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// export function checkCompState(component: CreateEmployeeComponent) {
//   if (component.isValid) {
//     return window.confirm(
//       'You di not save saved this employee! Do you really want to leave this page?'
//     );
//   }
//   return true;
// }
