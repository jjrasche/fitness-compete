import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LoginPageComponent } from "./containers/login-page.component";
import { LoginFormComponent } from "./components/login-form.component";

import { AuthService } from "./services/auth.service";
import { AuthEffects } from "./effects/auth.effects";
import { reducers } from "./reducers";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material/material.module";
import { AngularFireAuthModule } from "angularfire2/auth";
import { DummyComponent } from "./containers/dummy.component";
import { ThirdPartyAuthService } from "./services/third-party-auth.service";
import { SharedModule } from "../shared/shared.module";
import { FitBitAuthModule } from "../fitbit-auth/fit-bit-auth.module";


export const COMPONENTS = [LoginPageComponent, LoginFormComponent, DummyComponent];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    FitBitAuthModule.forRoot(),
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService, ThirdPartyAuthService],
})
export class AuthModule {
}