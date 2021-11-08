import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UnidadesPipe } from './pipes/unidades/unidades.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    UnidadesPipe,
  ],
  imports: [
    CommonModule,
    RouterModule, // Si los componentes, directivas, Pipes de este modulo usan routerLink
  ],
  // Los elementos que pueden ser consumidos por otros componentes cuando se importa este módulo
  // No basta con importar el módulo, se debe especificar que elementos serán accesibles fuera de este módulo
  exports: [
    UnidadesPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
  ]
})
export class SharedModule { }
