import { Inject, Injectable } from "@angular/core";
import { FitBitOauthDetails } from "../models/fit-bit-oauth-details";
import { OauthDetails } from "../../shared/models/oauth-details";

export const FITBITOAUTH = "fitBitOauth";
export const USER = "user";
export const baseFitBitAuthUrl = "https://www.fitbit.com/oauth2/authorize?response_type=token&";
export const fitBitAppId = "client_id=22CXX6&";
export const fitBitRedirectUrlBase = "redirect_uri=";
export const fitBitScope = "scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&";
export const fitButExpireTimeout = "expires_in=31536000";
export const redirectUrl = "/competition/fitbitauth/&"

@Injectable()
export class FitBitAuthService {

  // TODO add accessToken to store?
  constructor(@Inject("BaseUrl") private baseUrl: string,) {
  }

  get authUrl(): string {
    return `${baseFitBitAuthUrl}${fitBitAppId}${fitBitRedirectUrlBase}${encodeURI(this.baseUrl)}${redirectUrl}${fitBitScope}${fitButExpireTimeout}`;
  }

  get accessToken(): string {
    if (localStorage.getItem(FITBITOAUTH)) {
      return (JSON.parse(localStorage.getItem(FITBITOAUTH)) as OauthDetails).accessToken;
    }
    return null;
  }

  get authenticated(): boolean {
    let storedAuth = localStorage.getItem(FITBITOAUTH);
    if (storedAuth == null) {
      return false;
    }
    let auth = JSON.parse(storedAuth) as OauthDetails;
    return auth.expiratoin < new Date();
  }

  setFitBitAuthentication(oauth: OauthDetails): void { //} Observable<any> {
    localStorage.setItem(FITBITOAUTH, JSON.stringify(oauth));
  }

  urlIsOauthUrl(url: string): boolean {
    return url.includes("#");
  }

  parseOathUrl(oathUrl: string): OauthDetails {
    let args = oathUrl.split("#")[1].split("&");

    return new FitBitOauthDetails(
      args[0].split("=")[1],
      args[1].split("=")[1],
      args[2].split("=")[1].split("+"),
      args[3].split("=")[1],
      new Date((new Date()).getTime() + (parseInt(args[4].split("=")[1]) * 1000))
    );
  }
}
