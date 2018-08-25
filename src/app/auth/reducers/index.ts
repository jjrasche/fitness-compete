import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromRoot from "../../reducers/index";
import * as fromLoginPage from "./login-page.reducer";
import { SerializedRouterStateSnapshot } from "@ngrx/router-store";
import { User } from "../../shared/models/user";

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => {
    return state.status;
  }
);
export const getUser = createSelector(selectAuthStatusState, fromAuth.getUser);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);

export const getAuthGuardState = createSelector(
  fromRoot.getRouter,
  getUser,
  (snapshot: any, user: User) => {
    return {user: user, url: snapshot.router.state.url };
  }
);
