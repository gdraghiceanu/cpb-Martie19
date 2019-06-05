import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ronToEuro' })
export class RonToEuroPipe implements PipeTransform {
  transform(valueInRon: number, euroExchangeRate: number) {
    return valueInRon * euroExchangeRate;
  }
}