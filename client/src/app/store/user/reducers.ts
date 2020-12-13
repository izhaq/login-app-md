import { createReducer, on, createSelector } from '@ngrx/store';
import {setSelectedUser, setUser, setUsers, signupFailed} from './actions';
import {UserProfile, Users, UsersState, SignupResult} from './interfaces';
import { AppState } from './../interfaces.main';

export const initialState: UsersState = {
  users: [],
  user: {} as UserProfile,
  selectedUser: {} as UserProfile,
  signupResult: {} as SignupResult
};

export const setUsersReducer = createReducer(
  initialState,
  on(setUsers, (state, { users }) => ({ ...state, users: [...users] })),
  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(setSelectedUser, (state, { user }) => ({ ...state, selectedUser: { ...user } })),
  on(signupFailed, (state, { signupResult }) => ({ ...state, signupResult: { ...signupResult } }))
);

export const usersSelector = (state: AppState) => state.users;

export const selectUsers = createSelector<AppState, UsersState, Users>(
  usersSelector,
  (state: UsersState) => state.users
);

export const selectUser = createSelector<AppState, UsersState, UserProfile>(
  usersSelector,
  (state: UsersState) => state.user
);

export const selectSelectedUser = createSelector<AppState, UsersState, UserProfile>(
  usersSelector,
  (state: UsersState) => state.selectedUser
);

export const selectSignupResult = createSelector<AppState, UsersState, SignupResult>(
  usersSelector,
  (state: UsersState) => state.signupResult
);

