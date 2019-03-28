import {Component } from '@angular/core";
import { Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
     selector: 'app-emp',
     templateUrl: './emplo'

})
export class EmployeeComponent
@Output() employeeOut = new EventEmitter()
