import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { OuterSubscriber } from "rxjs/internal/OuterSubscriber";

@Component({
    selector:'app-emp',
    templateUrl:'./employee.component.html'
})
export class EmployeeComponent implements OnInit{
    sizePicture = 200;
    isVisible : boolean;
    constructor(){
        this.isVisible = true;
    };
    @Input() employee:any;
    @Output() employeeOutput = new EventEmitter();

    ngOnInit(){
        
    }

    handleChildEvent() {
        this.employeeOutput.emit('asdas');
    };
}