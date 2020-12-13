import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ApiService} from '../../services/api.service';
import {getUser, getUsers, saveUser, setSelectedUser, setUser, setUsers, signupFailed} from './actions';
import {Router} from '@angular/router';
import {iif, of} from 'rxjs';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers.type),
      mergeMap(() =>
        this.apiService.getUsers().pipe(
          map(users => setUsers({ users }))
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
          tap((response: any) => response.data.id !== -1 ? this.router.navigate(['/']) : response),
          map(response =>  signupFailed({ signupResult: { ...response } }))
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
