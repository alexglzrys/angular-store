import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/interfaces/product.model';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  // Crear un grupo de controladores reactivos
  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router) {
    this.construirFormulario()
  }

  ngOnInit(): void {
  }

  private construirFormulario() {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      description: ['', Validators.required],
      image: ['']
    })
  }

  saveProduct(event: Event) {
      event.preventDefault()
      // Verificar si el formulario es válido
      if (this.formGroup.valid) {
        // Obtener un objeto con los valores a enviar en el formulario
        const product:Product = this.formGroup.value
        // Llamar el servicio encargado de registrar el producto
        this.productsService.createProduct(product).subscribe(product => {
          console.log(product);
          // Redireccionar a otra ruta de la apliucaciópn
          this.router.navigate(['./admin/products']);
        })
      }
  }

  get priceField() {
    return this.formGroup.get('price');
  }
}
