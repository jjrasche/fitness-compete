import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./containers/login-page.component";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
  { path: "fitbitauth", component: LoginPageComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
