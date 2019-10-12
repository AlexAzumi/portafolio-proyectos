// Dependencias
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  /**
   * Invertir lista de elementos
   * @param value Lista de elementos
   */
  transform(value: any): any {
    return value.slice().reverse();
  }
}
