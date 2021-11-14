import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/shared/interfaces/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  // Esta es una variable de tipo observable, a la cual se le puede hacer una suscripcion desde la vista
  // Tambien podemos proceder de la forma clásica con un arreglo de productos
  products$: Observable<Product[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.cartService.cart$;
  }

}
