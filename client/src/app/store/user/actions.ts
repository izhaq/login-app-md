import { createAction, props } from '@ngrx/store';
import {UsersTypesNames, Users, UserProfile} from './interfaces';

/** Action to fetch all users */
export const getUsers = createAction(UsersTypesNames.GET_USERS);

/** Action to set users in store */
export const setUsers = createAction(UsersTypesNames.SET_USERS, props<{ users: Users }>());

/** Action to fetch user full profile*/
export const getUser = createAction(UsersTypesNames.GET_USER_PROFILE, props<{ id: string }>());

/** Action to set user in store */
export const setUser = createAction(UsersTypesNames.SET_USER_PROFILE, props<{ user: UserProfile }>());

/** Action to save new user */
export const saveUser = createAction(UsersTypesNames.SAVE_USER_PROFILE, props<{ user: Partial<UserProfile> }>());

/** Action to set user in store */
export const setSelectedUser = createAction(UsersTypesNames.SET_SELECTED_USER, props<{ user: UserProfile }>());

/** Action on signup failed  */
export const signupFailed = createAction(UsersTypesNames.SIGNUP_FAILED, props<{ signupResult: { email: string, id: string } }>());
