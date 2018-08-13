import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable, from } from "rxjs";
import { switchMap, catchError, exhaustMap, map, tap } from "rxjs/operators";

import {
  AuthActions,
  Login,
  LoginFailure,
  LoginSuccess,
  SignupSuccess,
  SignupFailure,
  Signup,
} from "../actions/auth.actions";
import { User } from "../models/user";
import { Authenticate } from "../models/authenticate";
import { AuthService } from "../services/auth.service";
import { Action } from "@ngrx/store";

@Injectable()
export class AuthEffects {
  @Effect()
  signup$ = this.actions.pipe(
    ofType<Signup>(AuthActions.Signup),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      from(this.authService.signup(auth)).pipe(
        map((credential: firebase.auth.UserCredential)  => new SignupSuccess(new User(credential))),
        catchError(err => of(new SignupFailure(err)))
      )
    ));

  @Effect()
  login: Observable<Action> = 
    this.actions.pipe(
      ofType<Login>(AuthActions.Login),
      map((action: Login) => action.payload),
      switchMap((auth: Authenticate) =>
        from(this.authService.login(auth)).pipe(
          map(credential => new LoginSuccess(new User(credential)),
          catchError(err => of(new LoginFailure(err)))
        )
      ),
    ));

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions.pipe(
    ofType(AuthActions.LoginSuccess),
    tap(() => {
      this.router.navigate(["/competition"])
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions.pipe(
    ofType(AuthActions.LoginRedirect, AuthActions.Logout),
    tap(authed => {
      this.router.navigate(["/login"]);
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
