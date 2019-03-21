import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list.component';
import { EmployeeComponent } from './employees/employee.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { SimpleChange } from './test/SimpleChange';
import { ChildComponent } from './test/twbc/child.component';
import { ParinteComponent } from './test/twbc/parinte.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeComponent,
    NavBarComponent,
    SimpleChange,
    ParinteComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
