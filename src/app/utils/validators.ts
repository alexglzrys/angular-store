import { AbstractControl } from "@angular/forms";

// Clase con métodos estáticos para validaciones personalizadas

export class MyValidators {

  // Nombre de nuestra validación personalizada
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 3500) {
      // La propiedad a la que hay que apuntar para saber si el control tiene un valor invalido
      return {
        price_invalid: true
      }
    }
  }

}
