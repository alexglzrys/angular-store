import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

// Registrar los modulos de firebase necesarios a usar en nuestra app
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { DemoComponent } from './pages/demo/demo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AppComponent as LayoutAppComponent } from './layouts/app/app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';


// Instalar firebase: Primero se crea una cuenta en Firebase (crear app)
// Instalar librería de firebase para angular. https://github.com/angular/angularfire
// Al día de hoy algunas cosas se han reacomodado en los paquetes de dicha librería, por ejemplo el directorio compat no existe, en este sentido, todo su contenido se sacó un nivel


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    NotFoundComponent,
    ProductInfoComponent,
    LayoutAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Modulo que activa la directiva ngModel
    SharedModule, // Algunos componentes de este módulo hacen uso de componentes registrados en el modulo SharedModule
    CoreModule, BrowserAnimationsModule,   // Modulo que importa todos nuestros servicios de aplicación
    MaterialModule, // Módulo que importa todos los componentes de Angular Material que usará nuestro proyecto,
    AdminModule,  // Registrar el módulo de tareas administrativas,
    HttpClientModule,   // Peticiones HTTP
    OrderModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),  // Inicializar Firebase con nuestras credenciales de acceso (cuenta)
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
