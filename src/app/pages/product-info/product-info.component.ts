import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    // Obtener los parametros de ruta y solicitar la información del producto a un servicio
    this.route.params.subscribe((params: Params) => {
      this.product = this.productsService.getProduct(Number(params.id));
      console.log('params', params, 'Product', this.product);
    });
  }

}
