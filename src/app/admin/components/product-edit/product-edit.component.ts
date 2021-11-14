import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/interfaces/product.model';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  formGroup: FormGroup;
  id: number;

  constructor(private productsService: ProductsService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.construirFormulario();
              }

  ngOnInit(): void {
    // Obtener el valor del parametro de ruta enviado a esta vista
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fetchProduct(this.id);
    })
  }

  private construirFormulario() {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['']
    })
  }

  fetchProduct(id: number) {
    this.productsService.getProduct(id).subscribe(product => {
      // Llenar los campos del formulario reactivo con la respuesta que viene desde el servicio
      this.formGroup.patchValue({...product})
      // Si el objeto de respuesta difiere en el nombre de los paths empleados en la construcción de controladres de formulario
      // se procede como {id: product.id, title: product.title} y no desestructurar todo el obeto de respuesta (o quiza tal vez si, hay que checar)
    })
  }

  saveProduct(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    // Guardar la información almacenada en el formulario reactivo
    const myProduct:Product = this.formGroup.value;
    this.productsService.updateProduct(this.id, myProduct).subscribe(resp => {
      // Navegar a otra ruta
      this.router.navigate(['./admin/products']);
    })
  }

  get priceField() {
    return this.formGroup.get('price');
  }

}
