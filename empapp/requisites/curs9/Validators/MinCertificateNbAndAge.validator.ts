import { ValidatorFn, FormArray } from '@angular/forms';

export function MinCertificateNbAndAgeValidator(certificateNumber: number, certificateAgeYears: number): ValidatorFn {
  return (control: FormArray): { [key: string]: any } | null => {
    return null;
  };
}
