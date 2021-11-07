import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AppComponent as LayoutAppComponent } from './layouts/app/app.component';

// Definición de rutas principales de la aplicación
const routes: Routes = [
  {
    path: '',
    component: LayoutAppComponent,  // El componente que sirve de base para el resto de sus hijos (Layout)
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full' // Si el path coincide al 100%, redireccinar
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductInfoComponent,
      },
    ]
  },
  {
    path: '**', // Si ninguna de las rutas hizo matchs, mostrar el siguiente componente
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
