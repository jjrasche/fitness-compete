import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';
import { MaterialModule } from '../material.module';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [],
})
export class CoreModule {
}
