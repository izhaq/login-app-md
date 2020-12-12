import { createReducer, on, createSelector } from '@ngrx/store';
import {setSelectedUser, setUser, setUsers} from './actions';
import {UserProfile, Users, UsersState} from './interfaces';
import { AppState } from './../interfaces.main';

export const initialState: UsersState = {
  users: [],
  user: {} as UserProfile,
  selectedUser: {} as UserProfile
};

export const setUsersReducer = createReducer(
  initialState,
  on(setUsers, (state, { users }) => ({ ...state, users: [...users] })),
  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(setSelectedUser, (state, { user }) => ({ ...state, selectedUser: { ...user } }))
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

