import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from 'src/app/models/employee';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService,
    private activatedRouter: ActivatedRoute ) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployee(+this.activatedRouter.snapshot.params['id']);
  }

}
