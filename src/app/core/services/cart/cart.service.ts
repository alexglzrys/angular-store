import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // La lista de productos agregadas al carrito
  private products:Product[] = [];
  // El carrito de compra se comporta de forma reactiva,
  private cart = new BehaviorSubject<Product[]>([]);

  // La variable a la cual nos suscribimos para que seamos notificados cuando hay cambios en el carrito
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    // Agregamos el nuevo producto a la lista, evitando la mutacion del arreglo principal
    this.products = [...this.products, product];
    // El carrito a cambiado, le pasamos su nuevo contenido. (emitimos un evento para todos los elementos que estas suscritos a este observable)
    this.cart.next(this.products);
  }

  total(): number {
    return this.products.length
  }

  /**
   * En lugar de variables reactivas se pudo haber hecho 100% con servicios y eventos personalizados,
   * pero se necesitarían otros metodos para saber el numero de elementos en el arreglo
   * ya que al momento de agregar al carrito, se necesitaría emitir un evento personalizado para preguntar
   * al servicio cuantos elementos hay en la lista y proyectarlo en la vista
   */

}
