import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { AngularFireAuth } from "angularfire2/auth";

import { Authenticate } from "../models/authenticate";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    // public db: AngularFireDatabase, 
    public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

  }

  signup(auth: Authenticate): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(auth.email, auth.password);
  }

  login(auth: Authenticate): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
