import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/product.model';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(value: [], ...args: unknown[]) {
    // Evitar elementos repetidos en la orden del carrito
    let set = new Set(value.map( obj => JSON.stringify(obj) ));
    let arrSinDuplicaciones = Array.from( set ).map( cadena => JSON.parse(cadena) );
    //console.log([...unicos]);


    return [...arrSinDuplicaciones];

  }

}
