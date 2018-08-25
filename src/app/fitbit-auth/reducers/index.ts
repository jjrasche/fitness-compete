import { createSelector, createFeatureSelector, ActionReducerMap} from "@ngrx/store";
import * as fromFitBitOauth from "./fit-bit-auth.reducer";
import * as fromRoot from "../../reducers/index";

export interface AuthState {
  fitBitOauth: fromFitBitOauth.State;
}

export interface State {
  fitBitOauth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  fitBitOauth: fromFitBitOauth.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.fitBitOauth;
  }
);
export const getFitBitAuthenticaiton = createSelector(selectAuthStatusState, fromFitBitOauth.getFitBitOauth);