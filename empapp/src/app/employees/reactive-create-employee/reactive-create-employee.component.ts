import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  NgForm
} from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../shared/employee.service';

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

  myEmployee: Employee;

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    code: new FormControl(''),
    region: new FormControl(''),
    salary: new FormControl(''),
    certificates: new FormArray([this.createCertificateGroup()])
  });

  get certificates(): FormArray {
    return this.employeeForm.get('certificates') as FormArray;
  }

  constructor(private route: Router, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.myEmployee = {
      'userId': null,
      'jobTitleName': 'Developer',
      'firstName': 'Tom',
      'lastName': 'Cruise',
      'employeeCode': 'E1',
      'region': 'CA',
      'salary': 1234,
      'phoneNumber': '408-1234567',
      'emailAddress': 'totalmem.c@gmail.com',
      'location': {
      'address': '1057 DT',
      'city': 'NY',
      'country': 'USA'
      },
      'imageUrl': '/assets/images/image1.jpg'
    };
  }

  cancel() {
    this.route.navigate(['/employees']);
  }


  saveEmployee() {
    this.empService
    .saveEmployee(this.myEmployee)
    .subscribe( emp =>  {
      console.log(emp);
    });
  }

  addCertificate(): void {
    this.certificates.push(this.createCertificateGroup());
  }

  private createCertificateGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      year: new FormControl('')
    });
  }
}
