import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, AfterViewInit, OnDestroy {
  // ViewChild gets template reference when available
  // Both ViewChilds are of type NgModel because we set on the template the ref equaled to the ngModel
  // NgModel is a directive so we get an object of type NgModel
  // inside we can find the reference to our FormControl

  // fnvar will be rendered from the start
  @ViewChild('fnvar') firstNameInput: NgModel;

  // lnvar will be rendered when isVisible==true
  @ViewChild('lnvar') lastNameInput: NgModel;

  private firstNameSubscription: Subscription;
  private lastNameSubscription: Subscription;

  isVisible = false;
  isValid = true;
  employee: Employee;
  isJobsError: boolean;
  jobs: string[] = ['Developer', 'Programm Directory', 'Project Manager', 'Business Analyst', 'CEO', 'Office Manager'];
  isRegionError: boolean;
  regions: string[] = ['Bucuresti', 'Constanta', 'Cluj', 'Timisoara', 'Sibiu', 'Iasi', 'Suceava'];

  constructor(private route: Router) {}

  ngOnInit() {
    this.employee = new Employee();
    this.employee.jobTitleName = 'default';
    this.employee.region = 'default';

    // we simulate a slow http call. We want to dispaly the input only after we received the data
    setTimeout(() => {
      this.isVisible = true;
    });
  }

  ngAfterViewInit(): void {
    this.firstNameSubscription = this.firstNameInput.control.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.lastNameSubscription = this.lastNameInput.control.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    if (this.firstNameSubscription) {
      this.firstNameSubscription.unsubscribe();
    }
    if (this.lastNameSubscription) {
      this.lastNameSubscription.unsubscribe();
    }
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
