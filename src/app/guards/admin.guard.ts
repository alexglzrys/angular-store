import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../core/services/auth/auth.service';

/**
 * Los guards permiten a los usuarios de nuestra aplicación
 * permitirles o negarles el acceso a ciertas páginas. con base a un resultado que puede ser una promesa,
 * un observavble o un booleano
 */

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return false;
    // Si es diferente de nulo significa que el usuario esta logeado
    return this.authService.hasUser().pipe(
      // operador tap para hacer debugin en RXjs
      map(user => user !== null ? true : false)
    )
  }

}
