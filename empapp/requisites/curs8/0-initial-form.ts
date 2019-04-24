import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  NgForm
} from '@angular/forms';

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

  constructor(private route: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/employees']);
  }

  saveEmployee() {}
}
