import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidades'
})
export class UnidadesPipe implements PipeTransform {

  // Recibir un valor de entrada, transformarlo, y retornar un nuevo valor de salida
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'kg':
        return 'Kilo';
      case 'lt':
        return 'Litro';
    }
  }

}
