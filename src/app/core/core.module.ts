import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';

/**
 * Este módulo agrupa a todos los servicios que se deben instanciar una sola vez
 * y que deben estar disponibles en la mayoría de los elementos de nuestra aplicación.
 * Por lo generar agrupa todos los servicios.
 *
 * Para que esté disponible en toda la aplicación, es necesario importar este módulo en app.module.ts
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
  ]
})
export class CoreModule { }
