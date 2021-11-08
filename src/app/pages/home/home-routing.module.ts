import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

// 1. Todo modulo en Angular debería tener un sistema de rutas
// 2. Para aplicar Lazy Loading en Angular, se requiere que el componente de página esté registrado bajo un modulo
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [
        // Solo el modulo principal puede tener declaradas rutas principales, en otros modulos se debe declarar rutas hijas
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class HomeRoutingModule { }
