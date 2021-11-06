import { Component } from '@angular/core';
import { Product } from './interfaces/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Store';
  nombres: string[] = ['Alejandro', 'Fernanda', 'Damaris', 'Zoe'];
  productos: Product[] = [
    {
      title: 'Mandarina',
      description: 'Mandarina maracaná sin semilla',
      price: 7,
      unit: 'kg',
      image: 'assets/images/mandarina.jpg'
    },
    {
      title: 'Uva roja',
      description: 'Uva premier sin semilla y con jugo de calidad',
      price: 45,
      unit: 'kg',
      image: 'assets/images/uvas.jpg'
    },
    {
      title: 'Manzana amarilla',
      description: 'Manzana de rancho con cascara fina',
      price: 15.50,
      unit: 'kg',
      image: 'assets/images/manzana.jpg'
    },
    {
      title: 'Leche alpura',
      description: 'Leche entera en presentación tetrapack con tapa de seguridad',
      price: 22.90,
      unit: 'lt',
      image: 'assets/images/leche.jpg'
    }
  ];

  objetoFecha = new Date();
  mes = this.objetoFecha.toLocaleString('es-mx', {month: 'long'});

  agregarElemento(): void {
    this.nombres.push('Nuevo elemento');
  }

  eliminarElemento(index: number): void {
    this.nombres.splice(index, 1);
  }

  productoAgregado(event: boolean): void {
    console.log('El producto se ha vendido');
  }
}
