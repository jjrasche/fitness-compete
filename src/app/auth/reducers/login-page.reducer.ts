import { AuthActions, AuthActionsUnion } from "../actions/auth.actions";

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActions.Signup:
    case AuthActions.Login: return { ...state, error: null, pending: true };
    case AuthActions.SignupSuccess:
    case AuthActions.LoginSuccess: return { ...state,  error: null,  pending: false };
    case AuthActions.SignupFailure:
    case AuthActions.LoginFailure: return { ...state, error: action.payload, pending: false };
    default: return state;
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
