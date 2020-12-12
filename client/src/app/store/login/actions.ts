import {ActionCreator, ActionType, createAction, props} from '@ngrx/store';
import {Credentials, LoginTypesNames} from './interfaces';

/** Action to log in the User from the Login Page */
export const login = createAction(LoginTypesNames.LOGIN, props<{ email: string, password: string }>());

/** Action to save Credentials upon successful login */
export const setCredentials = createAction(LoginTypesNames.SET_CREDENTIALS, props<{ credentials: Credentials }>());

/** Action to logout */
export const logout = createAction(LoginTypesNames.LOGOUT);
