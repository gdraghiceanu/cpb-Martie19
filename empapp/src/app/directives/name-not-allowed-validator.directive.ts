import { Directive, Input } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';
import { NameNotAllowedValidator } from '../validators/name-not-allowed.validator';

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
  @Input('nameNotAllowed') nameNotAllowed: string[];

  validate(control: AbstractControl): ValidationErrors {
    return NameNotAllowedValidator(this.nameNotAllowed)(control);
  }
}
