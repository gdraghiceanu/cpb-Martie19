import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  isValid = true;
  employee: Employee;
  isJobsError: boolean;
  jobs: string[] = ['Developer', 'Programm Directory', 'Project Manager', 'Business Analyst', 'CEO', 'Office Manager'];
  isRegionError: boolean;
  regions: string[] = ['Bucuresti', 'Constanta', 'Cluj', 'Timisoara', 'Sibiu', 'Iasi', 'Suceava'];

  constructor(private route: Router) { }

  ngOnInit() {
    this.employee = new Employee();
    this.employee.jobTitleName = 'default';
    this.employee.region = 'default';
  }

  cancel() {
    this.route.navigate(['/employees']);
  }

  validateJobs(value) {
    if (this.employee.jobTitleName === '') {
      this.isJobsError = true;
    } else {
      this.isJobsError = false;
    }
  }

  validateRegion(value) {
    if (this.employee.region === 'default') {
      this.isRegionError = true;
    } else {
      this.isRegionError = false;
    }
  }

  saveEmployee(empForm: NgForm) {
    console.log(empForm);
  }

}