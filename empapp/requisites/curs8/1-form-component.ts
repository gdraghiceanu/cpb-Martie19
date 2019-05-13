import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-create-employee',
  templateUrl: './reactive-create-employee.component.html',
  styleUrls: ['./reactive-create-employee.component.css']
})
export class ReactiveCreateEmployeeComponent implements OnInit {
  jobs: string[] = [
    'Developer',
    'Programm Directory',
    'Project Manager',
    'Business Analyst',
    'CEO',
    'Office Manager'
  ];
  regions: string[] = [
    'Bucuresti',
    'Constanta',
    'Cluj',
    'Timisoara',
    'Sibiu',
    'Iasi',
    'Suceava'
  ];

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    code: new FormControl(''),
    region: new FormControl(''),
    salary: new FormControl('')
  });

  constructor(private route: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/employees']);
  }

  saveEmployee() {}
}
