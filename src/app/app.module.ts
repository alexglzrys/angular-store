import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { UnidadesPipe } from './pipes/unidades.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UnidadesPipe
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
