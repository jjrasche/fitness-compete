import { Injectable } from "@angular/core";
import { CanActivate, Params, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, take, tap, exhaustMap } from "rxjs/operators";
import * as AuthActions from "../actions/auth.actions";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../reducers";
import { FitBitAuthService } from "./fit-bit-auth.service";
import { SerializedRouterStateSnapshot } from "@ngrx/router-store";
import { User } from "../models/user";

@Injectable()
export class FitBitAuthGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private fitBitAuthService: FitBitAuthService,
    private router: Router){}

  canActivate(): Observable<boolean> {
    // return this.store.pipe(
    //   select(fromAuth.getAuthGuardState),
    //   tap((state: any) => {
    //     // set oath
    //     let oauthDetails = this.fitBitAuthService.parseOathUrl(state.url);

    //     // assume signed in and user is valid
    //     if (state.user == null) {
    //       throw ("Fit Bit auth guard: User is not logged in.");
    //     }

    //     this.store.dispatch(new AuthActions.FitBitOauthSuccess(authenticatedUser));
    //     this.router.navigate(["/competition"]);
    //   }),
    //   take(1)
    // );

    // store is empty --> if ls contains --> bring into store 
    /**
     * states(in)   localStorage    reduxStore
     *                  n               n
     *                  y               n
     *                  n               y
     *                  y               y
     */
    // get user from storage, create oath object, add both user and oauth to store
    return this.fitBitAuthService.user.pipe(
      tap((user: User) => {
        let oauthDetails = this.fitBitAuthService.parseOathUrl(window.location.href);
        this.store.dispatch(new AuthActions.FitBitOauthSuccess({ user: user, oauth: oauthDetails }));
      }),
      map((user: User) => user == null),
      take(1)
    );
  }
}
