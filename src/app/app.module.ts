import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { UnidadesPipe } from './pipes/unidades.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AppComponent as LayoutAppComponent } from './layouts/app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UnidadesPipe,
    HighlightDirective,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ProductInfoComponent,
    LayoutAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Modulo que activa la directiva ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
