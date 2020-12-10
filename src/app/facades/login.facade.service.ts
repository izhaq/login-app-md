import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../store/interfaces.main';
import {Credentials, LoginTypesNames} from '../store/login/interfaces';
import {selectCredentials} from '../store/login/reducers';

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {

  constructor(private store: Store<AppState>) { }

  login(email: string, password: string): void {
    this.store.dispatch({ type: LoginTypesNames.LOGIN, email, password });
  }

  logout(): void {
    this.store.dispatch( { type: LoginTypesNames.LOGOUT});
  }

  getCredentials(): Observable<Credentials> {
    return this.store.pipe(select(selectCredentials));
  }
}
