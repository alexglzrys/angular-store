import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authServices: AuthService,
              private router: Router) {
    this.construirFormularioReactivo()
  }

  ngOnInit(): void {
  }

  private construirFormularioReactivo() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  register(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    // Si el formulario es válido, invocar el servicio para registrar el usuario
    if (this.formGroup.valid) {
      let user = this.formGroup.value;
      // firebase Auth siempre nos retorna una promesa
      this.authServices.register(user.email, user.password).then(response => {
        console.log(response);
        // Llevar este usuario a la vista de login
        this.router.navigate(['./auth/login']);
      })
    }
  }

}
