import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, {Pagination, Autoplay} from 'swiper';
// Los estilos se declaran en el archivo angular.json (no funciona con import)
// Cada una de las caracteristicas de Swiper funciona como un plugin, por tanto, es necesario especificar que lo vamos a usar
Swiper.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Cuando todos los componenes de esta vista estén inicializados, procedo a crear una instancia de la librería Swiper
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
