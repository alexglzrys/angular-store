import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/interfaces/product.model';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productos = this.productsService.getAllProducts();
  }

  productoAgregado(event: boolean): void {
    console.log('El producto se ha vendido');
  }

}
