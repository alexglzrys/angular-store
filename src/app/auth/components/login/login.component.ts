import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authServices: AuthService) {
    this.construirFormulario()
  }

  ngOnInit(): void {
  }

  private construirFormulario() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.formGroup.valid) {
      let user = this.formGroup.value
      this.authServices.userLogin(user.email, user.password).then(response => {
        this.router.navigate(['./admin'])
      }).catch(error => {
        console.log(error);
      })
    }
  }

}
