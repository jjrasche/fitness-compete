import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { FitBitAuthGuard } from "./services/fit-bit-auth-guard.service";
import { FitBitAuthEffects } from "./effects/fit-bit-auth.effects";
import { reducers } from "./reducers";
import { FitBitAuthService } from "./services/fit-bit-auth.service";



@NgModule({
  imports: [
    // CommonModule,
    StoreModule.forFeature("fitBitAuth", reducers),
    EffectsModule.forFeature([FitBitAuthEffects]),
  ],
})
export class FitBitAuthModule {
  static forRoot(): ModuleWithProviders<FitBitAuthModule> {
    return {
      ngModule: FitBitAuthModule,
      providers: [FitBitAuthService, FitBitAuthGuard],
    };
  }
}