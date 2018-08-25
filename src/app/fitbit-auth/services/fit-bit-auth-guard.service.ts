import { Injectable } from "@angular/core";
import { CanActivate, Params, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, take, tap, exhaustMap } from "rxjs/operators";
import * as FitBitActions from "../actions/fit-bit-auth.actions";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../reducers";
import { FitBitAuthService } from "./fit-bit-auth.service";
import { SerializedRouterStateSnapshot } from "@ngrx/router-store";
import { User } from "../../shared/models/user";
import { UserService } from "../../shared/services/user.service";

@Injectable()
export class FitBitAuthGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private userService: UserService,
    private fitBitAuthService: FitBitAuthService,
    private router: Router){}

  canActivate(): Observable<boolean> {
    // store is empty --> if ls contains --> bring into store 
    /**
     * states(in)   localStorage    reduxStore
     *                  n               n
     *                  y               n
     *                  n               y
     *                  y               y
     */
    // get user from storage, create oath object, add both user and oauth to store
    return this.userService.user.pipe(
      map((user: User) => {
        if (user) {
          let oauthDetails = this.fitBitAuthService.parseOathUrl(window.location.href);
          this.store.dispatch(new FitBitActions.FitBitOauthSuccess({ oauth: oauthDetails }));
          return true;
        }
        return false;
      })
    );
  }
}
