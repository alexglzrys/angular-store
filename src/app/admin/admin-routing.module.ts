import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

// Agrupa las rutas para este módulo (todo lo relacionado a tareas adminstrativas)
const routes: Routes = [
  {
    // Este componente generado con schematics de Angular material, sirve como contenedor base (un dashboard básico)
    path: '',
    component: NavComponent,
    children: [
      {
        // En la sección principal del componente Nav Schematics, podemos mostrar el contenido de otros componentes
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/create',
        component: ProductCreateComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
