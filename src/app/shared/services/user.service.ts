import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Observable } from "rxjs";

export const USER = "user";

@Injectable()
export class UserService {

  constructor(){}

  get userSaved(): boolean {
    return localStorage.getItem(USER) !== null;
  }

  get user(): Observable<User> {
    return Observable.create((observer: any) => {
      observer.next(JSON.parse(localStorage.getItem(USER)) as User);
      observer.complete();
    });
  }
 
  setUser(user: User) {
    localStorage.setItem(USER, JSON.stringify(user));
  }
}
