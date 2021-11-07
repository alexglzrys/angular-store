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
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UnidadesPipe,
    HighlightDirective,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
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
