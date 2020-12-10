import {LoginState} from './login/interfaces';
import {UsersState} from './user/interfaces';

export interface AppState {
  login: LoginState;
  users: UsersState;
}
