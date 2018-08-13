import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LoginPageComponent } from "./containers/login-page.component";
import { LoginFormComponent } from "./components/login-form.component";

import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { AuthEffects } from "./effects/auth.effects";
import { reducers } from "./reducers";
import { AuthRoutingModule } from "./auth-routing.module";
import { MaterialModule } from "../material.module";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FitBitAuthService } from "./services/fit-bit-auth.service";


export const COMPONENTS = [LoginPageComponent, LoginFormComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService, FitBitAuthService, AuthGuard],
})
export class AuthModule {
}