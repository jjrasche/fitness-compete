import { Injectable } from "@angular/core";

export const FITBITACCESSTOKEN = "fitBitAccessToken";
export const baseFitBitAuthUrl = "https://www.fitbit.com/oauth2/authorize?response_type=token&";
export const fitBitAppId = "client_id=22CXX6&";
export const fitBitRedirectUrl = "";
export const fitBitScope = "scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&";
export const fitButExpireTimeout = "expires_in=31536000";

@Injectable()
export class FitBitAuthService {

  // TODO add accessToken to store?
  constructor() {
  }

  formAuthenticationUrl(): string {
    return baseFitBitAuthUrl
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(FITBITACCESSTOKEN) === null;
  }

  setFitBitAuthentication(accessToken: string) {
    localStorage.setItem(FITBITACCESSTOKEN, accessToken)
  }

  getFitBitAuthentication(): string {
    return localStorage.getItem(FITBITACCESSTOKEN);
  }
}
