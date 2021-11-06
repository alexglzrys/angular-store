import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Angular Store';
  nombres: string[] = ['Alejandro', 'Fernanda', 'Damaris', 'Zoe'];

  objetoFecha = new Date();
  mes = this.objetoFecha.toLocaleString('es-mx', {month: 'long'});

  constructor() { }

  ngOnInit(): void {
  }

  agregarElemento(): void {
    this.nombres.push('Nuevo elemento');
  }

  eliminarElemento(index: number): void {
    this.nombres.splice(index, 1);
  }

}
