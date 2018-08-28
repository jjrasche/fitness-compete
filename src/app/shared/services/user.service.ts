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

  getAvailableUsers(): Observable<Array<User>> {
    // TOOD: should this go in store?
    return Observable.create((observer: any) => {
      let userArray = new Array<User>();
      userArray.push(new User("apples@gmail.com", "apples"))
      userArray.push(new User("oranges@gmail.com", "oranges"))
      userArray.push(new User("bananas@gmail.com", "bananas"))
      userArray.push(new User("plantanes@gmail.com", "plantanes"))
      userArray.push(new User("horseradish@gmail.com", "horseradish"))
      observer.next(userArray);
      observer.complete();
    })
  }
}
