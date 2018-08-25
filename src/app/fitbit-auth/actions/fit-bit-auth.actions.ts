import { Action } from "@ngrx/store";

export enum FitBitAuthActions {
  FitBitOauthSuccess = "[FitBitAuth] FitBit Oauth Success",
}

export class FitBitOauthSuccess implements Action {
  readonly type = FitBitAuthActions.FitBitOauthSuccess;

  constructor(public payload: {oauth: OauthDetails}) { }
}

export type FitBitAuthActionsUnion = FitBitOauthSuccess;
