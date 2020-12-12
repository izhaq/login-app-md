import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import {Observable, of, pipe} from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import {LoginFacadeService} from '../../facades/login.facade.service';

// other imports

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginFacade: LoginFacadeService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated().pipe(
      switchMap((credentials) => of(true)),
      catchError(
        pipe(
          tap( () => this.loginFacade.logout()),
          () => of(false)
        )
      )
    );
  }

  isAuthenticated(): Observable<any> {
    return this.loginFacade.getCredentials().pipe(
      filter((credentials) => credentials.login),
      take(1)
    );
  }
}
