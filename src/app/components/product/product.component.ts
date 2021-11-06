import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges, OnDestroy {

  // Property binding: Enviar datos a un componente hijo desde el componente padre
  @Input() product: Product;
  // Event binding: Enviar información al componte padre desde el componente hijo (eventos personalizados)
  @Output() addCartEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('1. Constructor - Especial para inicializar datos');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges - Especial para analizar los nuevos y anteriores valores de este componente');
    console.log(changes);
  }

  /*ngDoCheck(): void {
    Llamado cuando cualquier valor de propiedad o directiva cambia en el componente (alternativa a ngOnChanges).
  }*/

  ngOnInit(): void {
    console.log('3. ngOnInit - Especial para llamadas http');
  }

  ngOnDestroy(): void {
    console.log('4. ngOnDestroy - Limipieza de datos al momento de destruir el componente');
  }

  addCart(): void {
    console.log('Producto agregado al carrito');
    this.addCartEvent.emit(true);
  }

}
