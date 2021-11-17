import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/interfaces/product.model';
import { MyValidators } from 'src/app/utils/validators';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  // Crear un grupo de controladores reactivos
  formGroup: FormGroup
  imageURL$: Observable<firebase.storage.UploadTaskSnapshot>;

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private router: Router,
              private storage: AngularFireStorage) {
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

  // este getter es un helper que apunta al controlador de control reactivo (para hacer validaciones)
  get priceField() {
    return this.formGroup.get('price');
  }

  upload(event: any) {
    // Obtener información del archivo adjunto al formulario
    const file = event.target.files[0];
    // Dar un nombre aleatorio, (podemos acceder a las propiedades del objeto anterior para asignar el mimso nombre, pero si existe uno igual lo sobreescribe)
    const filePath = uuidv4();
    // Generar una referencia hacia el archivo
    const fileRef = this.storage.ref(filePath);
    // Subir el archivo
    const task = this.storage.upload(filePath, file)

    // Suscribirse para observar cambios durante la subida del archivo
    task.snapshotChanges().pipe(
      finalize(() => {
        // Nos retorna un observable, nos suscribimos en la vista, con el pipe async para mostrar la vista previa
        this.imageURL$ = fileRef.getDownloadURL()
        // En este punto debemos setear la URL de la imagen a la info del formulario reactivo para proceder a guardarlo como parte de la información del registro
        this.imageURL$.subscribe(url => {
          this.formGroup.get('image').setValue(url)
        })
      })
    ).subscribe()
  }
}
