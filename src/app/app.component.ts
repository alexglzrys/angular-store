import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Store';
  nombres:Array<string> = ['Alejandro', 'Fernanda', 'Damaris', 'Zoe'];

  agregarElemento() {
    this.nombres.push('Nuevo elemento');
  }

  eliminarElemento(index: number) {
    this.nombres.splice(index, 1);
  }
}
