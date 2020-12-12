import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect, Effect} from '@ngrx/effects';
import {catchError, exhaustMap, map, switchMap, tap} from 'rxjs/operators';
import {ApiService} from '../../services/api.service';
import {login, logout, setCredentials} from './actions';
import {EMPTY} from 'rxjs';
import {Router} from '@angular/router';
import {getUser, setUser} from '../user/actions';
import {UserProfile} from '../user/interfaces';

@Injectable()
export class Effects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login.type),
      exhaustMap(({ email, password }) => this.apiService.login(email, password)),
      switchMap(user => [
        setCredentials({ credentials: { email: user.email, login: true } }),
        setUser({ user }),
        getUser({ id: user.email }),
      ]),
      catchError(() => EMPTY)
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout.type),
      switchMap(() => [
        setCredentials({ credentials: { email: '', login: false } }),
        setUser({ user: {} as UserProfile }),
      ]),
      tap(() => this.router.navigate(['/'])),
      catchError(() => EMPTY)
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private readonly router: Router,
  ) {}
}
