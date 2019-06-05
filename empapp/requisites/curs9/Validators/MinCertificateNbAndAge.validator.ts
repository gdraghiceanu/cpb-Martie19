import { ValidatorFn, FormArray } from '@angular/forms';

export function MinCertificateNbAndAgeValidator(
  certMinNumber: number,
  certMaxAgeYears: number,
  certYearKey: string
): ValidatorFn {
  return (control: FormArray): { [key: string]: any } | null => {
    const year = new Date().getFullYear();
    const recentCertificates = (control.value as object[]).filter(
      c => year - c[certYearKey] <= certMaxAgeYears
    );
    return recentCertificates.length >= certMinNumber
      ? null
      : { minCertificateNbAndAgeValidator: 'not enough recent certificates' };
  };
}
