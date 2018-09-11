import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';

export const COMPONENTS = [
];
export const PIPES = [
  EnumToArrayPipe
];
export const MODULES = [
];
export const PROVIDERS = [
  UserService
];

@NgModule({
  imports: MODULES,
  declarations: [COMPONENTS, PIPES],
  exports: [COMPONENTS, PIPES, MODULES],
  providers: PROVIDERS,
})
export class SharedModule {}
