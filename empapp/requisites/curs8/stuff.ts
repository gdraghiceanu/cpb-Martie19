import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

import { FormControl, FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-create-employee',
  templateUrl: './reactive-create-employee.component.html',
  styleUrls: ['./reactive-create-employee.component.css']
})
export class ReactiveCreateEmployeeComponent implements OnInit {
  developmentForm = new FormGroup({
    technologies: new FormArray([this.createTechnologyGroup()])
  });

  addTechnology(): void {
    this.technologies.push(this.createTechnologyGroup());
  }

  get technologies(): FormArray {
    return this.developmentForm.get('technologies') as FormArray;
  }

  createTechnologyGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      experience: new FormControl('')
    });
  }

  profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')])
  });

  employeeForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jobTitle: new FormControl(''),
    code: new FormControl(''),
    region: new FormControl(''),
    salary: new FormControl(''),
    certificates: new FormArray(
      [this.createCertificateGroup()]
    )
  });

  private createCertificateGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      year: new FormControl('')
    });
  }

  // employeeForm = this.formBuilder.group({
  //   firstName: [''],
  //   lastName: [''],
  //   jobTitle: [''],
  //   code: [''],
  //   region: [''],
  //   salary: [''],
  //   certificates: this.formBuilder.array(
  //     [this.createCertificateGroup()]
  //   )
  // });

  // private createCertificateGroup(): FormGroup {
  //   return this.formBuilder.group({
  //     name: [''],
  //     year: ['']
  //   });
  // }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.profileForm);
    console.log(this.profileForm.value);
    this.profileForm.patchValue({ firstName: 'asd' });
  }

  get certificatesArray() {
    return this.profileForm2.get('certificates') as FormArray;
  }

  addCertificate() {
    this.certificatesArray.push(this.createCertificateGroup());
  }
}
