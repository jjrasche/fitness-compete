import { FitBitAuthActions, FitBitAuthActionsUnion } from "../actions/fit-bit-auth.actions";

export interface State {
  fitBitOauth: OauthDetails
}

export const initialState: State = {
  fitBitOauth: null
};

export function reducer(state = initialState, action: FitBitAuthActionsUnion): State {
  switch (action.type) {
    case FitBitAuthActions.FitBitOauthSuccess: return { ...state, fitBitOauth: action.payload.oauth };
    default: return state;
  }
}

export const getFitBitOauth = (state: State) => state.fitBitOauth;
