export interface UsersState {
  users: Users;
  user: UserProfile;
  selectedUser: UserProfile;
  signupResult: SignupResult;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}

export interface UserProfile extends User{
  age: number;
  password: string;
}

export interface SignupResult {
  email: string;
  id: string;
}

export type Users = Array<Partial<User>>;

export enum UsersTypesNames {
  GET_USERS = '[Users Page] Get Users', // handled by effect
  SET_USERS = '[Users Page] Set Users',
  GET_USER_PROFILE = '[Dashboard Page] Get User', // handled by effect
  SET_USER_PROFILE = '[Dashboard Page] Set User to Store',
  SAVE_USER_PROFILE = '[Signup Page] Save New User', // handled by effect
  SET_SELECTED_USER = '[Dashboard Page] Set Selected user to the store',
  SIGNUP_FAILED = '[Signup Page] Save attempt failed since email exist',
};
