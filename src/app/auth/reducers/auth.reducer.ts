import { AuthActionsUnion, AuthActions } from "../actions/auth.actions";
import { User } from "../models/user";
import { OauthDetails } from "../models/oauth-details";

export interface State {
  user: User | null;
  oath: OauthDetails
}

export const initialState: State = {
  user: null,
  oath: null
};

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActions.SignupSuccess:
    case AuthActions.LoginSuccess: {
      let ret = { ...state, user: action.payload };
      return ret;
    }
    case AuthActions.FitBitOauthSuccess: return { ...state, user: action.payload.user, oath: action.payload.oauth };
    case AuthActions.Logout: return initialState;
    default: return state;
  }
}

export const getUser = (state: State) => state.user;
