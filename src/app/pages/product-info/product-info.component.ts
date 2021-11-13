import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../shared/interfaces/product.model';
import { ProductsService } from '../../core/services/products/products.service';

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
      //this.product = this.productsService.getProduct(Number(params.id));
      this.fetchProduct(params.id);
      console.log('params', params, 'Product', this.product);
    });
  }

  fetchProduct(id: number) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    let myProduct: Product = {
      title: 'CAMISETA DEPORTIVA',
      price: 790,
      description: 'Camiseta deportiva de equipos de futbol soccer liga Mexicana',
      unit: 'unidad',
      image: 'assets/images/mug.png'
    }
    this.productsService.createProduct(myProduct).subscribe(product => {
      console.log(product);
    })
  }

  updateProduct() {
    let myUpdateProduct: Partial<Product> = {
      title: 'PANTALÓN EDICIÓN ESPECIAL',
      description: 'Esta es la nueva moda para los programdores modernos de JS',
      price: 1250
    };
    this.productsService.updateProduct(2, myUpdateProduct).subscribe(productChanged => {
      console.log(productChanged);
    })
  }

}
