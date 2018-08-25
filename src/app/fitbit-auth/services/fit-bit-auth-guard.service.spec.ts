import { TestBed, inject } from "@angular/core/testing";
import { StoreModule, Store, combineReducers } from "@ngrx/store";
import { FitBitAuthGuard } from "./fit-bit-auth-guard.service";
import * as AuthActions from "../../auth/actions/auth.actions";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../../auth/reducers";

describe("Auth Guard", () => {
  let guard: FitBitAuthGuard;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          auth: combineReducers(fromAuth.reducers),
        }),
      ],
      providers: [FitBitAuthGuard],
    });

    store = TestBed.get(Store);
    spyOn(store, "dispatch").and.callThrough();
    guard = TestBed.get(FitBitAuthGuard);
  });

  it("should return false if the user state is not logged in", () => {
    // const expected = cold("(a|)", { a: false });

    // expect(guard.canActivate()).toBeObservable(expected);
  });

  // it("should return true if the user state is logged in", () => {
  //   const user: any = {};
  //   const action = new AuthActions.LoginSuccess({ user });
  //   store.dispatch(action);

  //   const expected = cold("(a|)", { a: true });

  //   expect(guard.canActivate()).toBeObservable(expected);
  // });
});
