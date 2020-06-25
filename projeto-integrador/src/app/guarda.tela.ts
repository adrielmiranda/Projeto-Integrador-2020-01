import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardaTela implements CanActivate {
  //loginAutenticado: boolean
  constructor(private api: LoginService, 
    private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | boolean{

      if(this.api.loginEstaAutenticado()){

        return true;
      }
    this.router.navigate(['/login']);

    return false;
  }
}
