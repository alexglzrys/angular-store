import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
