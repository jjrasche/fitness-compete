import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // private usersCollection: AngularFirestoreCollection<User>;
  // users: Observable<[]>;


  constructor() {
    // this.usersCollection = db.collection<User>('users');
    // this.users = this.usersCollection.valueChanges();
  }
}
