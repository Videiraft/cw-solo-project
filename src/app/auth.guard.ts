import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const redirectUrl = next['_routerState']['url'];

      if (this.auth.isAuthenticated()) {
        return true;
      }
      
      this.router.navigateByUrl(
        this.router.createUrlTree(
          ['/login'], {
            queryParams: {
              redirectUrl
            }
          }
        )
      );
  
      return false;
  
  }
  
}
