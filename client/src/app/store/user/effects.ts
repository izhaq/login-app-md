import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {ApiService} from '../../services/api.service';
import {getUser, getUsers, saveUser, setSelectedUser, setUser, setUsers} from './actions';
import {Router} from '@angular/router';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers.type),
      mergeMap(() =>
        this.apiService.getUsers().pipe(
          map(users => setUsers({ users }))/*,
          catchError(error => of(AuthApiActions.loginFailure({ error })))*/
        )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser.type),
      mergeMap(({ id }) =>
        this.apiService.getUserProfile(id).pipe(
          map(user => setSelectedUser({ user })),
          tap(() => this.router.navigate(['dashboard']))
        )
      )
    )
  );

  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveUser.type),
      mergeMap(({ user }) =>
        this.apiService.signup(user).pipe(
          map(id => setUser({ user })),
          tap(() => this.router.navigate(['/'])),
          /*,
          catchError(error => of(AuthApiActions.loginFailure({ error })))*/
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private readonly router: Router,
  ) {}
}
