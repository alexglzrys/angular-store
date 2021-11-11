import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Al trabajar con Angular Material, se recomienda hacerlo mediante un módulo compartido que sirva
 * de base para importar todos los componentes de la librería que se desean usar en el proyecto.
 * E importarlo desde nuestro app.module.ts
 *
 * Es importate volver a compilar el proyecto, ya que al agregar nuevas librerías, angular necesita pre-construirlas
 */
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ],
  // Este módulo es compartido, por tanto, es necesario exportar los modulos de material (componentes) que se desa sean públicos para otros módulos
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
