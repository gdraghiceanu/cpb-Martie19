import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { NameNotAllowedValidator } from 'src/app/validators/name-not-allowed.validator';
import { MinCertificateNbAndAgeValidator } from 'src/app/validators/min-certificate-nb-and-age.validator';
import { MinSalaryByRegionValidator } from 'src/app/validators/min-salary-by-region.validator';
import { CodeReservedValidator } from 'src/app/validators/code-reserved.validator';

@Component({
  selector: 'app-reactive-create-employee',
  templateUrl: './reactive-create-employee.component.html',
  styleUrls: ['./reactive-create-employee.component.css']
})
export class ReactiveCreateEmployeeComponent implements OnInit {
  jobs: string[] = [];
  regions: string[] = [];
  regionSalaries: { region: string; salary: number }[] = [];
  euroExchangeRate: number;

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
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private codeReservedValidator: CodeReservedValidator
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: {jobs: string[], regions: string[], euro: number}) => {
      this.jobs = data.jobs;
      this.regions = data.regions;
      const newRegionSalaries = this.regions.map(
        (region, index) => ({ region: region, salary: (index + 1) * 1000 })
      );
      this.regionSalaries.push(...newRegionSalaries);
      this.euroExchangeRate = data.euro;
    });
  }

  cancel() {
    this.router.navigate(['/employees']);
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
