import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // controladores de control de formulario (Especial cuando se tiene un solo control, aislado de un formulario complejo)
  emailField: FormControl;

  constructor() {
    // Preparar el control de formulario
    this.emailField = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    // Suscribirme a los cambios de este control de formulario reactivo
    this.emailField.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  ngOnInit(): void {
  }

  sendMail() {
    console.log('Email enviado');
  }

}
