import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AppComponent as LayoutAppComponent } from './layouts/app/app.component';
import { AdminGuard } from './guards/admin.guard';

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
        // Cargar un componente de página mediante Lazy Load (es necesario que esté registrada en un módulo)
        // El modulo debe tener registrado un sistema de rutas hijas
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],  // Esta ruta está protegida por un guardian.
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
      {
        // Este componente de ruta, si hace uso del componente Layout
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  // Esta ruta no hace uso del LayoutComponent, por tanto la registro de forma separada
  // Se registra mediante lAZY load ya que todo se encuentra agrupado bajo un modulo que tiene regostrado un routing con rutas hiajs
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**', // Si ninguna de las rutas hizo matchs, mostrar el siguiente componente
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Cuando se usa Lazy Load, solo se cargan los archivos bajo demanda, sin embargo en páginas puede verse
    // el efecto blanco cuando se navega entre ellas, por ello es importante definir una estrategia.
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
