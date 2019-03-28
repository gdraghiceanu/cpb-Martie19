import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <h1>New Employee</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Aici vom construi cu Form]</h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `
})
export class CreateEmployeeComponent implements OnInit {

  isValid = true;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.route.navigate(['/employees']);
  }

}
