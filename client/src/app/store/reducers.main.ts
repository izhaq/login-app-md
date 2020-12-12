import { loginReducer } from './login/reducers';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './interfaces.main';
import {setUsersReducer} from './user/reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
  login: loginReducer,
  users: setUsersReducer,
};

