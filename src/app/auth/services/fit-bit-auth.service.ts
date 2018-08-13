import { Injectable } from "@angular/core";

export const FITBITACCESSTOKEN = "fitBitAccessToken"

@Injectable()
export class FitBitAuthService {

  // TODO add accessToken to store?
  constructor() {
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
