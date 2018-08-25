import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';

export const COMPONENTS = [
];
export const MODULES = [
];
export const PROVIDERS = [
  UserService
];

@NgModule({
  imports: MODULES,
  declarations: COMPONENTS,
  exports: [COMPONENTS, MODULES],
  providers: PROVIDERS,
})
export class SharedModule {}
