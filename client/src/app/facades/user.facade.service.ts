import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../store/interfaces.main';
import {SignupResult, User, UserProfile, Users, UsersTypesNames} from '../store/user/interfaces';
import {selectSelectedUser, selectSignupResult, selectUser, selectUsers} from '../store/user/reducers';
import {map} from 'rxjs/operators';
import {ErrorMessageService} from '../services/error-message.service';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  constructor(private store: Store<AppState>, private errorMsg: ErrorMessageService) { }

  getCurrentUser(): Observable<UserProfile> {
    return this.store.pipe(select(selectUser));
  }

  getSelectedUser(): Observable<UserProfile> {
    return this.store.pipe(select(selectSelectedUser));
  }

  saveUserProfile(user: User): void {
    this.store.dispatch({ type: UsersTypesNames.SAVE_USER_PROFILE, user });
  }

  fetchAllUsers(): void {
    this.store.dispatch({ type: UsersTypesNames.GET_USERS });
  }

  fetchSelectedUser(id: string): void {
    this.store.dispatch({ type: UsersTypesNames.GET_USER_PROFILE, id});
  }

  getAllUsers(): Observable<Users> {
    return this.store.pipe(select(selectUsers));
  }

  getSignupResults(): Observable<any> {
    return this.store.pipe(
      select(selectSignupResult),
      map( (res: any) => res?.data?.id === -1 ),
      map(exist => ({
        emailExist: exist,
        error: exist ? this.errorMsg.getMessage({ emailExist: 'emailExist' } ) : ''
      }) )
    );
  }
}
