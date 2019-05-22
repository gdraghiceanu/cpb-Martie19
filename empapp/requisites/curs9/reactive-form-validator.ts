import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NameNotAllowedValidator } from 'src/app/validators/nameNotAllowed.validator';
import { MinCertificateNbAndAgeValidator } from 'src/app/validators/minCertificateNbAndAge.validator';
import { MinSalaryByRegionValidator } from 'src/app/validators/minSalaryByRegion.validator';
import { CodeReservedValidator } from 'src/app/validators/codeReserved.validator';

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

  regionSalaries: { region: string; salary: number }[] = this.regions.map(
    (region, index) => ({ region: region, salary: (index + 1) * 1000 })
  );

  employeeForm = this.formBuilder.group(
    {
      firstName: [
        '',
        [Validators.required, NameNotAllowedValidator(['Alex', 'Andrei'])]
      ],
      lastName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      code: [ 
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]{1,3}-[0-9]{1,3}')],
        this.codeReservedValidator.validate.bind(this.codeReservedValidator)
      ],
      region: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(900)]],
      certificates: this.formBuilder.array(
        [this.createCertificateGroup()],
        MinCertificateNbAndAgeValidator(1, 2, 'year')
      )
    },
    {
      validator: MinSalaryByRegionValidator(
        'region',
        'salary',
        this.regionSalaries
      )
    }
  );

  get firstName(): FormControl {
    return this.employeeForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.employeeForm.get('lastName') as FormControl;
  }

  get jobTitle(): FormControl {
    return this.employeeForm.get('jobTitle') as FormControl;
  }

  get code(): FormControl {
    return this.employeeForm.get('code') as FormControl;
  }

  get region(): FormControl {
    return this.employeeForm.get('region') as FormControl;
  }

  get salary(): FormControl {
    return this.employeeForm.get('salary') as FormControl;
  }

  get certificates(): FormArray {
    return this.employeeForm.get('certificates') as FormArray;
  }

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private codeReservedValidator: CodeReservedValidator
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.route.navigate(['/employees']);
  }

  saveEmployee() {
    alert(JSON.stringify(this.employeeForm.value));
  }

  addCertificate(): void {
    this.certificates.push(this.createCertificateGroup());
  }

  ifControlRequired(formControl: FormControl): boolean {
    return (
      formControl.touched &&
      formControl.invalid &&
      formControl.errors['required']
    );
  }

  private createCertificateGroup(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      year: ['']
    });
  }
}
