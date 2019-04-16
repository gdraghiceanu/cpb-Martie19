import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  constructor(private empService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.empService.getEmployee(+this.activatedRoute.snapshot.params['id']).subscribe(
      emp => this.employee = emp
    );
  }

}
