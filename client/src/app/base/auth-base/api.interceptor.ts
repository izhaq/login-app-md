import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import {LoginFacadeService} from '../../facades/login.facade.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private loginFacade: LoginFacadeService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add here any global headers like JWT toke
    return this.loginFacade.getCredentials().pipe(
      first(),
      switchMap( cred => {
        const authReq = cred.login ? request.clone({
          setHeaders: { Authorization: 'Bearer fakeJwToke' },
        }) : request;
        return next.handle(authReq);
      })
    );
  }
}
