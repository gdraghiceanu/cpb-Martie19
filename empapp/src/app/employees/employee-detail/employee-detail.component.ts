import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/Models/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  constructor(private empServ: EmployeeService,
    private routeActivate: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = +this.routeActivate.snapshot.params['id'];
    this.employee = this.empServ.getEmployee(id);
  }

}
