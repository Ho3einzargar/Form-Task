import { AuthService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(localStorage.getItem("userName") == this.auth.usermainName &&
      localStorage.getItem("password") == this.auth.passmainName )
      {
      return true
     }
     else{
       return false;
     }







  //       return this.auth.authenticated()
  //   .then((Authenticated: boolean) => {
  //     if(Authenticated) {
  //       return true;
  //     } else{
  //       //  return false;
  //     }
  //   });
  // }
    }
    }
