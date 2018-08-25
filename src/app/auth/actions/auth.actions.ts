import { Action } from "@ngrx/store";
import { User } from "../../shared/models/user";
import { Authenticate } from "../../shared/models/authenticate";

export enum AuthActions {
  Login = "[Auth] Login",
  Logout = "[Auth] Logout",
  LoginSuccess = "[Auth] Login Success",
  LoginFailure = "[Auth] Login Failure",
  LoginRedirect = "[Auth] Login Redirect",
  Signup = "[Auth] Signup",
  SignupSuccess = "[Auth] Signup Success",
  SignupFailure = "[Auth] Signup Failure",
}

export class Login implements Action {
  readonly type = AuthActions.Login;

  constructor(public payload: Authenticate) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActions.LoginSuccess;

  constructor(public payload: User) { }
}

export class LoginFailure implements Action {
  readonly type = AuthActions.LoginFailure;

  constructor(public payload: any) { }
}

export class LoginRedirect implements Action {
  readonly type = AuthActions.LoginRedirect;
}

export class Logout implements Action {
  readonly type = AuthActions.Logout;
}

export class Signup implements Action {
  readonly type = AuthActions.Signup;

  constructor(public payload: Authenticate) { }
}

export class SignupSuccess implements Action {
  readonly type = AuthActions.SignupSuccess;

  constructor(public payload: User) { }
}

export class SignupFailure implements Action {
  readonly type = AuthActions.SignupFailure;

  constructor(public payload: any) { }
}

export type AuthActionsUnion =
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout
  | Signup
  | SignupSuccess
  | SignupFailure;
  