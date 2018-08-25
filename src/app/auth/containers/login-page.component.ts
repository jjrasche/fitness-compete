import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import * as AuthActions from '../actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-login-page',
  template: `
    <fc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </fc-login-form>
  `,
  styles: [],
})
export class LoginPageComponent implements OnInit {
  pending$ = this.store.pipe(select(fromAuth.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));
  user = this.store.pipe(select(fromAuth.getUser));

  constructor(
    private store: Store<fromAuth.State>,
    private router: Router,
  ) { }

  ngOnInit() { }

  onSubmit($event: any) {
    let authAction = $event.action === "login" ? 
      new AuthActions.Login($event) : 
      new AuthActions.Signup($event);
    this.store.dispatch(authAction);
  }
}
