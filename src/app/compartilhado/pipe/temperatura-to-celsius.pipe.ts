import { EscalaEnum } from './../../model/enum/escala.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperaturaToCelsiusPipe'
})
export class TemperaturaToCelsiusPipe implements PipeTransform {

  transform(value: number, escala: string): string {
    let grausCelsius: number;

    if (value && value > 0) {
      if (escala === EscalaEnum.Kelvin) {
        grausCelsius = this.converterKelvinCelsius(value);
        if (grausCelsius.toString().includes('.')) {
          return grausCelsius.toFixed(0);
        } else {
          return grausCelsius.toString();
        }
      }
    }
    return '';
  }

  converterKelvinCelsius(value: number): number {
    return value - 273.15;
  }
}
