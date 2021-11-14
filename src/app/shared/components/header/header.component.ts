import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total_products: number;
  total: number

  constructor(private cartServices: CartService) {
    // Nos suscribimos al carrito para saber cuando cambia su contenido. En este caso cuando se invoca next(valor) se ejecuta esta parte de código, de esta forma sabemos cuando elementos hay en la lista de productos
    this.cartServices.cart$.subscribe(products => {
      console.log(products);
      this.total_products = products.length;
    })
  }

  ngOnInit(): void {
    // Esto solo se ejecuta una vez, si el arreglo crece, no podemos saber sobre ese cambio.
    // A no ser que se al momneto de agregar, se emita un evento personalizado para hacer esa pregunta al servicio
    // para eso sirve la programación reactiva
    this.total = this.cartServices.total()
  }

}
