// FormGroup custom Validation function
import { ValidatorFn, FormGroup, FormControl } from '@angular/forms';

export function MinSalaryByRegionValidator(
  regionKey: string,
  salaryKey: string,
  regionSalaries: { region: string; salary: number }[]
): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } | null => {
    const regionControl = group.get(regionKey) as FormControl;
    const salaryControl = group.get(salaryKey) as FormControl;
    let currentRegionSalary = regionSalaries.find(
      rs => rs.region === regionControl.value
    );
    if (!currentRegionSalary) {
      currentRegionSalary = { region: '', salary: 0 };
    }
    const validationResult =
      currentRegionSalary.salary < salaryControl.value
        ? null
        : {
            minSalaryForRegion: `The minimum salary for ${
              currentRegionSalary.region
            } is ${currentRegionSalary.salary}`
          };
    return validationResult;
  };
}
