import { Injectable } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Podemos ignorar el decorador @Injectable si este servicio se encuentra
 * registrado en el módulo de core, y a su vez este módulo se encuentra importado en
 * app.module.ts.
 *
 * El funcionamiento es el mismo, pero de esta forma se tiene mejor organizada nuestra app.
 */

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Recuperar el valor de una variable declarada en el archivo de entorno de configuración
  API_URL = environment.api_url

  /*products: Product[] = [
    {
      id: 1,
      title: 'Mandarina',
      description: 'Mandarina maracaná sin semilla',
      price: 7,
      unit: 'kg',
      image: 'assets/images/mandarina.jpg'
    },
    {
      id: 2,
      title: 'Uva roja',
      description: 'Uva premier sin semilla y con jugo de calidad',
      price: 45,
      unit: 'kg',
      image: 'assets/images/uvas.jpg'
    },
    {
      id: 3,
      title: 'Manzana amarilla',
      description: 'Manzana de rancho con cascara fina',
      price: 15.50,
      unit: 'kg',
      image: 'assets/images/manzana.jpg'
    },
    {
      id: 4,
      title: 'Leche alpura',
      description: 'Leche entera en presentación tetrapack con tapa de seguridad',
      price: 22.90,
      unit: 'lt',
      image: 'assets/images/leche.jpg'
    }
  ];*/

  // Inyectar el servicio HttpClient
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
    //return [...this.products];
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
    //return this.products.find((prod: Product) => id === Number(prod.id));
  }
}
