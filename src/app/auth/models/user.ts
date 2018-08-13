
export class User{
  public email: string;
  public name: string;
  public accessToken: string

  constructor(firebaseUser: firebase.auth.UserCredential = null) {
    if (firebaseUser) {
      this.email = firebaseUser.user.email;
      this.name = firebaseUser.user.displayName;

    }
  }
}