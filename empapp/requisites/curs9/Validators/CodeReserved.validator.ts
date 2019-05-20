import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { EmployeeService } from "src/app/employees/shared/employee.service";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CodeReservedValidator implements AsyncValidator{

    constructor(private employeeService: EmployeeService) {
    }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.employeeService.checkCodeReserved(control.value as string)
            .pipe(
                map(isReserved => isReserved ? {CodeIsReserved: 'This code is reserved'} : null)
            )
    }    
}