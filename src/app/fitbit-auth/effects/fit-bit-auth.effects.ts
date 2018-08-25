import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, Observable, from } from "rxjs";
import { switchMap, catchError, exhaustMap, map, tap, take } from "rxjs/operators";

import { FitBitOauthSuccess, FitBitAuthActions } from "../actions/fit-bit-auth.actions";
import { Action, Store, select } from '@ngrx/store';

import * as fromAuth from '../reducers';
import { AngularFireAuth } from "angularfire2/auth";
import { FitBitAuthService } from "../services/fit-bit-auth.service";

@Injectable()
export class FitBitAuthEffects {

  @Effect({ dispatch: false })
  fitBitOauthSuccess$ = this.actions.pipe(
    ofType(FitBitAuthActions.FitBitOauthSuccess),
    tap((action: FitBitOauthSuccess) => {
      this.fitBitAuthService.setFitBitAuthentication(action.payload.oauth);
    })
  );

  constructor(
    private actions: Actions,
    private router: Router,
    private fitBitAuthService: FitBitAuthService,
    public afAuth: AngularFireAuth
  ) {}
}
