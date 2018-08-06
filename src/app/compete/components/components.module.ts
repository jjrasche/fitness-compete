import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
// import { SharedModule } from '../../shared/shared.module';


export const COMPONENTS = [
  TestCaseComponent,
  TestCaseListComponent,
  TestRunComponent,
];

@NgModule({
  imports: [
    // SharedModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
