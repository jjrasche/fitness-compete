import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./containers/login-page.component";
import { FitBitAuthGuard } from "./services/auth-guard.service";
import { DummyComponent } from "./containers/dummy.component";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "fitbitauth", component: DummyComponent, canActivate: [FitBitAuthGuard], },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
