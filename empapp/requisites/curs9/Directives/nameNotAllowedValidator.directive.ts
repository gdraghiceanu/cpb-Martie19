import { Directive, Input } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';
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
