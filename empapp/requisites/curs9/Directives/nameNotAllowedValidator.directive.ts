import {
  Directive,
  Input
} from 'requisites/curs9/directives/node_modules/@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from 'requisites/curs9/directives/node_modules/@angular/forms';
import { NameNotAllowedValidator } from '../validators/nameNotAllowed.validator';

@Directive({
  selector: '[nameNotAllowed]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameNotAllowedValidatorDirective,
      multi: true
    }
  ]
})
export class NameNotAllowedValidatorDirective implements Validator {
  @Input('nameNotAllowed') forbiddenName: string[];

  validate(control: AbstractControl): ValidationErrors {
    return NameNotAllowedValidator(this.forbiddenName)(control);
  }
}
