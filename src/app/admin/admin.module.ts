import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
/**
 * https://material.angular.io/guide/schematics#dashboard-schematic
 *
 * Todo componente de material importado automáticamente por el generador de schematics en este módulo,
 * se debe pasar a su modulo correspondiente de material
 *
 * ng add @angular/material
 * ng add @angular/cdk  (este se agrega automáticamente si agregamos angular material mediante ng add)
 * ng generate @angular/material:address-form <component-name>
 * */
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [NavComponent, ProductFormComponent, ProductListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule, // Los componentes de este modulo usan material
    ReactiveFormsModule
  ]
})
export class AdminModule { }
