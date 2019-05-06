import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

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

  employeeForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    jobTitle: [''],
    code: [''],
    region: [''],
    salary: [''],
    certificates: this.formBuilder.array([this.createCertificateGroup()])
  });

  get certificates(): FormArray {
    return this.employeeForm.get('certificates') as FormArray;
  }

  constructor(private route: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/employees']);
  }

  saveEmployee() {}

  addCertificate(): void {
    this.certificates.push(this.createCertificateGroup());
  }

  private createCertificateGroup(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      year: ['']
    });
  }
}
