import { OauthDetails } from "./oauth-details";

export class User{
  public email: string;
  public name: string;

  constructor(firebaseUser: firebase.auth.UserCredential = null) {
    if (firebaseUser) {
      this.email = firebaseUser.user.email;
      this.name = firebaseUser.user.displayName;
    }
  }
}