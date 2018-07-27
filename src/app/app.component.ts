import { Component } from '@angular/core';
import { User } from "./models/user.model"
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;


  constructor(db: AngularFirestore) {
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  createUser(user: User) {
    this.usersCollection.add(user);
  }

}
