import { TestBed, inject } from "@angular/core/testing";
import { StoreModule, Store, combineReducers } from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";
import * as fromRoot from "../../reducers";
import * as fromAuth from "../reducers";
import { FitBitAuthService } from "./fit-bit-auth.service";
import { OauthDetails } from "../models/oauth-details";

const module = {
  declarations: [],
  providers: [
    FitBitAuthService,
    { provide: "BaseUrl", useValue: "" }
  ],
};
describe("Auth Guard", () => {
  let service: FitBitAuthService;
  beforeEach(() => {
    TestBed.configureTestingModule(module);
    service = TestBed.get(FitBitAuthService);
  });

  it("happy path", () => {
    let oathUrl = `http://localhost:4200/fitbitauth#access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2UkxZV0QiLCJhdWQiOiIyMkNYWDYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTY0MDIzNTU0LCJpYXQiOjE1MzQxMjg2Mzl9.e-b02h9qe6zH0wXEdQPVTluLZMHv9JYc25pmvXWaszk&user_id=6RLYWD&scope=sleep+activity+settings+nutrition+heartrate+profile+location+social+weight&token_type=Bearer&expires_in=29894915`;
    let expected = 
    new OauthDetails(
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2UkxZV0QiLCJhdWQiOiIyMkNYWDYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNTY0MDIzNTU0LCJpYXQiOjE1MzQxMjg2Mzl9.e-b02h9qe6zH0wXEdQPVTluLZMHv9JYc25pmvXWaszk",
      "6RLYWD",
      ["sleep","activity","settings","nutrition","heartrate","profile","location","social","weight"],
      "Bearer",
      new Date((new Date()).getTime() + 29894915000));
    let results = service.parseOathUrl(oathUrl);

    // dates should be relatively close
    expect(results.expiratoin.getTime()).toBeCloseTo(expected.expiratoin.getTime());
    expected.expiratoin = results.expiratoin;

    expect(results).toEqual(expected);
  });
});
