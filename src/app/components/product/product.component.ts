import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Property binding: Enviar datos a un componente hijo desde el componente padre
  @Input() product: Product;
  // Event binding: Enviar información al componte padre desde el componente hijo (eventos personalizados)
  @Output() addCartEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addCart(): void {
    console.log('Producto agregado al carrito');
    this.addCartEvent.emit(true);
  }

}
