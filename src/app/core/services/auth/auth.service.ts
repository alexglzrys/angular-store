import { Injectable } from '@angular/core';
// Inyectar los servicios necesarios para conectarse con Firebase Auth
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Inyectar el servicio de autenticación de firebase
  constructor(private afa: AngularFireAuth) { }

  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    // El servicio retorna una Promesa del tipo usercredentials
    return this.afa.createUserWithEmailAndPassword(email, password);
  }
}
