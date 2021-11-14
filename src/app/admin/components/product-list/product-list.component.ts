import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.model';
import { ProductsService } from "./../../../core/services/products/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  // Arreglo con el nombre de las columnas a proyectar en el header de la tabla
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id: number, index: number) {
    console.log('Eliminando');

    this.productService.deleteProduct(id).subscribe(response => {
      if (response) {
        console.log(index);
        // Es valido hacer una consulta para retornar el listado de productos, Sin embargo, tambien podemos eliminar el elemento de nuestro arreglo con base en su indice, o id
        this.products = this.products.filter((product, i)  => i !== index);
      }
    })
  }

}
