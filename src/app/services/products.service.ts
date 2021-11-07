import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
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
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProduct(id: number): Product {
    return this.products.find((prod: Product) => id === Number(prod.id));
  }
}
