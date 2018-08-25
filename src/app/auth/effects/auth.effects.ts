import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable, from } from "rxjs";
import { switchMap, catchError, exhaustMap, map, tap, take } from "rxjs/operators";

import {
  AuthActions,
  Login,
  LoginFailure,
  LoginSuccess,
  SignupSuccess,
  SignupFailure,
  Signup,
} from "../actions/auth.actions";
import { User } from "../../shared/models/user";
import { Authenticate } from "../../shared/models/authenticate";
import { AuthService } from "../services/auth.service";
import { Action, Store, select } from '@ngrx/store';

import * as fromAuth from '../reducers';
import { AngularFireAuth } from "angularfire2/auth";
import { ThirdPartyAuthService } from "../services/third-party-auth.service";

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
    ofType(AuthActions.LoginSuccess, AuthActions.SignupSuccess),
    map((action: LoginSuccess | SignupSuccess) => action.payload),
    tap((user: User) => {
      this.thirdPartyAuthService.getThirdPartyAuthIfNeeded(user);
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
    private router: Router,
    public afAuth: AngularFireAuth,
    private thirdPartyAuthService: ThirdPartyAuthService,
  ) {}
}
