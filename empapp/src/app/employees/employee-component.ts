import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: 'app-emp',
  templateUrl: './employee-component.html',
})

export class EmployeeComponent implements OnInit {

  isVisible: boolean;
  contor = 0;


  @Input() employee: any;
  @Output() employeeOut = new EventEmitter();

  ngOnInit() {
    setInterval(() => { this.contor++; }, 1000);
  }
  constuctor() {
    this.isVisible = true;
  }

  toggleImage() {
    this.isVisible = !this.isVisible;
  }

  handleChildEvent() {
    this.employeeOut.emit(this.contor);
  }
}
