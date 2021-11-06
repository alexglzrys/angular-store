import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product = {
    title: 'Mandarina',
    description: 'Mandarina fresca y jugosa sin semilla',
    price: 8.90,
    image: 'assets/images/mandarina.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
