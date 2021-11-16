import { Injectable } from '@angular/core';
// Inyectar los servicios necesarios para conectarse con Firebase Auth
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { Observable } from 'rxjs';

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

  userLogin(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afa.signInWithEmailAndPassword(email, password)
  }

  userLogout(): Promise<void> {
    return this.afa.signOut();
  }

  // Verificar el estado de la autenticación (hay o no usuario logeado). Implementarlo en los Guards
  hasUser(): Observable<firebase.User> {
    return this.afa.authState;
  }
}
