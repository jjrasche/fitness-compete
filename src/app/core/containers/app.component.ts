import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  template: ` <mat-toolbar color="primary">
                <span>API Testing Application</span>
                <button mat-button type="button" (click)="navigate('testing/systems')">Systems</button>
              </mat-toolbar>
              <div class="container" role="main">
                <router-outlet></router-outlet>
              </div>
                `,
})
export class AppComponent {
  title = 'app';

  constructor(
    public router: Router,
    private store: Store<number>
  ) { }

  public navigate(location: string) {
    this.router.navigate([location]);
  }
}
