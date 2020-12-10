export interface LoginState {
  credentials: Credentials;
}

export interface Credentials {
  email: string;
  login: boolean;
}

export enum LoginTypesNames {
  LOGIN = '[Login Page] Login',
  SET_CREDENTIALS = '[Login Page] Set Credentials',
  LOGOUT = '[Login Page] logout the system',
  ONLOGIN = '[Login Page] On Login',
};
