import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { login, setCredentials } from './actions';
import {Credentials, LoginState} from './interfaces';
import {ActionReducer} from '@ngrx/store/src/models';
import { AppState } from './../interfaces.main';

export const initialState: LoginState = {
  credentials: {
    email: '',
    login: false
  }
};

export const loginReducer = createReducer(
  initialState,
  on(setCredentials, (state, { credentials }) => ({ ...state, credentials: { ...credentials } }))
);

export const credentialsSelector = (state: AppState) => state.login;

export const selectCredentials = createSelector<AppState, LoginState, Credentials>(
  credentialsSelector,
  (state: LoginState) => state.credentials
);
